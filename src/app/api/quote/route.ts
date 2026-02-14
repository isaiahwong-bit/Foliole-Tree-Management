import { NextRequest, NextResponse } from "next/server";

/**
 * Quote form API route.
 *
 * How to connect to Jordan's email:
 * ──────────────────────────────────
 * 1. Create a .env.local file in the project root
 * 2. Add these variables:
 *
 *    QUOTE_EMAIL_TO=jordan@foliole.com
 *    SMTP_HOST=smtp.gmail.com
 *    SMTP_PORT=587
 *    SMTP_USER=jordan@foliole.com
 *    SMTP_PASS=your-app-password
 *
 * 3. Install nodemailer: npm install nodemailer @types/nodemailer
 * 4. Uncomment the nodemailer section below and remove the placeholder response.
 *
 * For Gmail: use an App Password (not your regular password).
 * For other providers: use the appropriate SMTP settings.
 */

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const isContractor = formData.get("isContractor") === "true";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || "Not provided";
    const location = formData.get("location") as string;
    const treeCount = formData.get("treeCount") as string;
    const urgency = formData.get("urgency") as string;
    const serviceType = formData.get("serviceType") as string;
    const description =
      (formData.get("description") as string) || "No additional details";

    // Validate required fields
    if (!name || !email || !location || !treeCount || !serviceType) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Collect uploaded images info
    const images = formData.getAll("images") as File[];
    const imageNames = images
      .filter((f) => f.size > 0)
      .map((f) => f.name);

    // Format urgency label
    const urgencyLabels: Record<string, string> = {
      flexible: "Flexible — no rush",
      "within-month": "Within a month",
      urgent: "Urgent — this week",
      emergency: "Emergency — immediate",
    };

    // Build email body
    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW QUOTE REQUEST — FOLIOLE
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
Urgency:        ${urgencyLabels[urgency] || urgency}

DESCRIPTION
───────────
${description}

${imageNames.length > 0 ? `PHOTOS ATTACHED (${imageNames.length})\n───────────\n${imageNames.join("\n")}` : "No photos attached"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

    // ─────────────────────────────────────────────
    // OPTION 1: Nodemailer (uncomment when ready)
    // ─────────────────────────────────────────────
    //
    // import nodemailer from "nodemailer";
    //
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT) || 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    //
    // const attachments = await Promise.all(
    //   images
    //     .filter((f) => f.size > 0)
    //     .map(async (file) => ({
    //       filename: file.name,
    //       content: Buffer.from(await file.arrayBuffer()),
    //       contentType: file.type,
    //     }))
    // );
    //
    // await transporter.sendMail({
    //   from: `"Foliole Website" <${process.env.SMTP_USER}>`,
    //   to: process.env.QUOTE_EMAIL_TO,
    //   replyTo: email,
    //   subject: `Quote Request — ${name} — ${serviceType}`,
    //   text: emailBody,
    //   attachments,
    // });
    //
    // ─────────────────────────────────────────────

    // Placeholder: log to console until SMTP is configured
    console.log("═══════════════════════════════");
    console.log("  QUOTE REQUEST RECEIVED");
    console.log("═══════════════════════════════");
    console.log(emailBody);
    if (imageNames.length > 0) {
      console.log(`\n📎 ${imageNames.length} image(s) would be attached`);
    }
    console.log("═══════════════════════════════\n");

    return NextResponse.json({
      success: true,
      message: "Quote request received. Jordan will be in touch shortly.",
    });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call directly." },
      { status: 500 }
    );
  }
}
