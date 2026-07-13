import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Quote form API route.
 *
 * Email delivery uses Resend (https://resend.com). To go live:
 *   1. Create a Resend account and API key.
 *   2. Set in the environment (see .env.example):
 *        RESEND_API_KEY   — the API key
 *        QUOTE_TO_EMAIL   — where quote requests are delivered (Jordan's inbox)
 *        QUOTE_FROM_EMAIL — optional; a verified sender, e.g.
 *                           "LumberJord Website <quotes@lumberjord.com.au>"
 *   Until both RESEND_API_KEY and QUOTE_TO_EMAIL are set, submissions are
 *   logged to the server console only (dev/preview behaviour).
 */

const MAX_FILES = 5;
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const MAX_TOTAL_BYTES = 4.2 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = /^image\/(jpeg|png|webp|gif|heic|heif)$/;

const URGENCIES = ["flexible", "within-month", "urgent", "emergency"] as const;
const TREE_COUNTS = ["1", "2-3", "4-6", "7-10", "10+", "large-site"] as const;
const SERVICE_TYPES = new Set([
  // property
  "Pruning & shaping",
  "Health assessment",
  "Tree removal",
  "Stump removal",
  "Cabling & bracing",
  "Storm damage",
  "General advice",
  "Other",
  // contractor
  "Complex climb support",
  "Overflow / capacity",
  "Municipal contract work",
  "Ongoing partnership",
]);

const urgencyLabels: Record<string, string> = {
  flexible: "Flexible, no rush",
  "within-month": "Within a month",
  urgent: "Urgent, this week",
  emergency: "Emergency, immediate",
};

/** Read a form value as a trimmed single-line string (newlines collapsed). */
function getLine(form: FormData, key: string, maxLen: number): string {
  const value = form.get(key);
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\t\0]+/g, " ").trim().slice(0, maxLen);
}

/** Read a form value as trimmed multi-line text (control chars stripped). */
function getText(form: FormData, key: string, maxLen: number): string {
  const value = form.get(key);
  if (typeof value !== "string") return "";
  // eslint-disable-next-line no-control-regex
  return value.replace(/[^\S\n]+/g, " ").replace(/\0/g, "").trim().slice(0, maxLen);
}

function sanitizeFilename(name: string): string {
  const base = name.split(/[/\\]/).pop() ?? "photo";
  // eslint-disable-next-line no-control-regex
  return base.replace(/[\x00-\x1f]/g, "").slice(0, 80) || "photo";
}

// Best-effort in-memory rate limit. Serverless instances don't share state,
// so this is a speed bump rather than a wall — the honeypot does the rest.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const recentByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recentByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (hits.length >= RATE_MAX) {
    recentByIp.set(ip, hits);
    return true;
  }
  hits.push(now);
  recentByIp.set(ip, hits);
  // Keep the map from growing unbounded on long-lived instances.
  if (recentByIp.size > 5000) recentByIp.clear();
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: "Invalid form submission." },
        { status: 400 }
      );
    }

    // Honeypot: real users never fill this. Pretend success so bots move on.
    if (getLine(formData, "website", 200) !== "") {
      return NextResponse.json({ success: true, message: "Quote request received." });
    }

    const isContractor = formData.get("isContractor") === "true";
    const name = getLine(formData, "name", 100);
    const email = getLine(formData, "email", 254);
    const phone = getLine(formData, "phone", 40) || "Not provided";
    const location = getLine(formData, "location", 200);
    const treeCount = getLine(formData, "treeCount", 20);
    const urgency = getLine(formData, "urgency", 20);
    const serviceType = getLine(formData, "serviceType", 60);
    const description =
      getText(formData, "description", 5000) || "No additional details";

    // Validate required fields
    if (!name || !email || !location || !treeCount || !serviceType) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Validate email format (no commas/semicolons — it becomes the reply-to)
    const emailRegex = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate enumerated fields against their known values
    if (
      !(URGENCIES as readonly string[]).includes(urgency) ||
      !(TREE_COUNTS as readonly string[]).includes(treeCount) ||
      !SERVICE_TYPES.has(serviceType)
    ) {
      return NextResponse.json(
        { error: "Invalid selection. Please reload the page and try again." },
        { status: 400 }
      );
    }

    // Validate uploaded images: count, type, and size
    const images = formData
      .getAll("images")
      .filter((f): f is File => f instanceof File && f.size > 0);

    if (images.length > MAX_FILES) {
      return NextResponse.json(
        { error: `Please attach at most ${MAX_FILES} photos.` },
        { status: 400 }
      );
    }
    const totalBytes = images.reduce((sum, f) => sum + f.size, 0);
    if (
      totalBytes > MAX_TOTAL_BYTES ||
      images.some(
        (f) => f.size > MAX_FILE_BYTES || !ALLOWED_IMAGE_TYPES.test(f.type)
      )
    ) {
      return NextResponse.json(
        { error: "Photos must be images totalling under 4MB." },
        { status: 400 }
      );
    }

    const imageNames = images.map((f) => sanitizeFilename(f.name));

    // Build email body
    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW QUOTE REQUEST: LUMBERJORD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Enquiry type:  ${isContractor ? "🏗️ Industry / Contractor" : "🏠 Property Owner"}

CONTACT DETAILS
───────────────
Name:     ${name}
Email:    ${email}
Phone:    ${phone}

JOB DETAILS
───────────
Location:       ${location}
Trees:          ${treeCount}
Service:        ${serviceType}
Urgency:        ${urgencyLabels[urgency]}

DESCRIPTION
───────────
${description}

${imageNames.length > 0 ? `PHOTOS ATTACHED (${imageNames.length})\n───────────\n${imageNames.join("\n")}` : "No photos attached"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.QUOTE_TO_EMAIL;

    if (resendKey && toEmail) {
      const resend = new Resend(resendKey);
      const attachments = await Promise.all(
        images.map(async (file, i) => ({
          filename: imageNames[i],
          content: Buffer.from(await file.arrayBuffer()),
        }))
      );

      const { error } = await resend.emails.send({
        from:
          process.env.QUOTE_FROM_EMAIL ??
          "LumberJord Website <onboarding@resend.dev>",
        to: toEmail,
        replyTo: email,
        subject: `Quote request: ${name} - ${serviceType}`,
        text: emailBody,
        attachments,
      });

      if (error) {
        console.error("Quote email failed:", error);
        return NextResponse.json(
          { error: "We couldn't send your request right now. Please try again shortly." },
          { status: 502 }
        );
      }
    } else {
      // Dev/preview fallback: no email provider configured.
      console.warn(
        "RESEND_API_KEY / QUOTE_TO_EMAIL not set - quote request logged only."
      );
      console.log("═══════════════════════════════");
      console.log("  QUOTE REQUEST RECEIVED");
      console.log("═══════════════════════════════");
      console.log(emailBody);
      console.log("═══════════════════════════════\n");
    }

    return NextResponse.json({
      success: true,
      message: "Quote request received. Jordan will be in touch shortly.",
    });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
