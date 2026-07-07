"use client";

import {
  useState,
  useRef,
  useEffect,
  useMemo,
  type FormEvent,
  type ChangeEvent,
} from "react";
import { m, AnimatePresence } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import {
  ArrowRight,
  Upload,
  X,
  CheckCircle,
  ChevronDown,
  Loader2,
  MapPin,
  TreePine,
  Clock,
  Wrench,
  ImageIcon,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

type Urgency = "flexible" | "within-month" | "urgent" | "emergency";

interface FormData {
  isContractor: boolean;
  name: string;
  email: string;
  phone: string;
  location: string;
  treeCount: string;
  urgency: Urgency;
  serviceType: string;
  description: string;
  images: File[];
}

// Vercel serverless functions reject bodies over ~4.5MB, so the client
// must keep the whole submission under that — not just each file.
const MAX_FILES = 5;
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;

const urgencyOptions: { value: Urgency; label: string; description: string }[] =
  [
    {
      value: "flexible",
      label: "Flexible",
      description: "No rush, schedule at convenience",
    },
    {
      value: "within-month",
      label: "Within a month",
      description: "Would like it sorted soon",
    },
    {
      value: "urgent",
      label: "Urgent",
      description: "Needs attention this week",
    },
    {
      value: "emergency",
      label: "Emergency",
      description: "Immediate safety concern",
    },
  ];

const serviceTypes = {
  property: [
    "Pruning & shaping",
    "Health assessment",
    "Tree removal",
    "Stump removal",
    "Cabling & bracing",
    "Storm damage",
    "General advice",
    "Other",
  ],
  contractor: [
    "Complex climb support",
    "Overflow / capacity",
    "Cabling & bracing",
    "Municipal contract work",
    "Ongoing partnership",
    "Other",
  ],
};

const inputClasses =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60 user-invalid:border-red-400/70 transition-all text-sm";

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    isContractor: false,
    name: "",
    email: "",
    phone: "",
    location: "",
    treeCount: "",
    urgency: "flexible",
    serviceType: "",
    description: "",
    images: [],
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadNotice, setUploadNotice] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Create stable object URLs for image previews and revoke on cleanup
  const imageUrls = useMemo(
    () => formData.images.map((file) => URL.createObjectURL(file)),
    [formData.images]
  );

  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);

  // Move screen-reader/keyboard focus to the confirmation once sent.
  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  const updateField = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const skipped: string[] = [];
    let totalBytes = formData.images.reduce((sum, f) => sum + f.size, 0);
    const accepted: File[] = [];

    for (const file of Array.from(files)) {
      if (formData.images.length + accepted.length >= MAX_FILES) {
        skipped.push(`${file.name} (maximum ${MAX_FILES} photos)`);
        continue;
      }
      if (!file.type.startsWith("image/")) {
        skipped.push(`${file.name} (not an image)`);
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        skipped.push(`${file.name} (over 4MB)`);
        continue;
      }
      if (totalBytes + file.size > MAX_TOTAL_BYTES) {
        skipped.push(`${file.name} (4MB total limit reached)`);
        continue;
      }
      totalBytes += file.size;
      accepted.push(file);
    }

    if (accepted.length > 0) {
      updateField("images", [...formData.images, ...accepted]);
    }
    setUploadNotice(
      skipped.length > 0
        ? `${skipped.length} photo${skipped.length > 1 ? "s" : ""} skipped: ${skipped.join(", ")}`
        : ""
    );

    // Reset input so same file can be selected again
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (index: number) => {
    updateField(
      "images",
      formData.images.filter((_, i) => i !== index)
    );
    setUploadNotice("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const payload = new FormData();
      payload.append("isContractor", String(formData.isContractor));
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("location", formData.location);
      payload.append("treeCount", formData.treeCount);
      payload.append("urgency", formData.urgency);
      payload.append("serviceType", formData.serviceType);
      payload.append("description", formData.description);
      // Honeypot — humans never see or fill this field.
      payload.append("website", honeypotRef.current?.value ?? "");

      formData.images.forEach((file) => {
        payload.append("images", file);
      });

      const res = await fetch("/api/quote", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof TypeError
          ? "Network problem — please check your connection and try again."
          : err instanceof Error
            ? err.message
            : "Something went wrong."
      );
    }
  };

  const currentServices = formData.isContractor
    ? serviceTypes.contractor
    : serviceTypes.property;

  return (
    <section id="contact" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange via-orange to-orange-dark" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 60px, white 60px, white 1px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 70%, rgba(20,20,56,0.35) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
            Your trees deserve expert care.
            <br />
            <span className="text-navy">Tell Jordan what you need.</span>
          </h2>

          <p className="mt-6 text-lg text-navy/85 leading-relaxed max-w-xl mx-auto">
            Fill out the form below and Jordan will get back to you with a
            detailed quote. No obligation, no pressure.
          </p>
        </m.div>

        {/* Form */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <m.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-navy rounded-2xl p-10 lg:p-14 border border-white/10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange/15 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-orange" />
                </div>
                <h3
                  ref={successHeadingRef}
                  tabIndex={-1}
                  className="text-2xl font-semibold text-white mb-3 focus:outline-none"
                >
                  Quote request sent
                </h3>
                <p className="text-white/70 leading-relaxed max-w-md mx-auto">
                  Thanks for reaching out. Jordan will review your details and
                  get back to you shortly, usually within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setUploadNotice("");
                    setFormData({
                      isContractor: false,
                      name: "",
                      email: "",
                      phone: "",
                      location: "",
                      treeCount: "",
                      urgency: "flexible",
                      serviceType: "",
                      description: "",
                      images: [],
                    });
                  }}
                  className="mt-8 text-sm text-orange hover:text-orange-light transition-colors"
                >
                  Submit another request
                </button>
              </m.div>
            ) : (
              <m.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="bg-navy rounded-2xl p-8 lg:p-10 border border-white/10 space-y-8"
              >
                {/* Honeypot — hidden from real users, bots tend to fill it */}
                <div
                  aria-hidden="true"
                  className="absolute w-px h-px overflow-hidden -left-[9999px] top-auto"
                >
                  <label htmlFor="quote-website">
                    Leave this field empty
                    <input
                      id="quote-website"
                      ref={honeypotRef}
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                {/* Contractor toggle */}
                <div
                  role="group"
                  aria-labelledby="enquiry-type-label"
                >
                  <span
                    id="enquiry-type-label"
                    className="text-white/80 text-sm font-medium mb-3 block"
                  >
                    I&apos;m enquiring as&hellip;
                  </span>
                  <div className="flex rounded-xl overflow-hidden border border-white/15">
                    <button
                      type="button"
                      aria-pressed={!formData.isContractor}
                      onClick={() => {
                        updateField("isContractor", false);
                        updateField("serviceType", "");
                      }}
                      className={`flex-1 py-3 px-4 text-sm transition-all duration-300 ${
                        !formData.isContractor
                          ? "bg-orange text-navy font-semibold"
                          : "bg-white/5 text-white/60 font-medium hover:text-white/85"
                      }`}
                    >
                      Property Owner
                    </button>
                    <button
                      type="button"
                      aria-pressed={formData.isContractor}
                      onClick={() => {
                        updateField("isContractor", true);
                        updateField("serviceType", "");
                      }}
                      className={`flex-1 py-3 px-4 text-sm transition-all duration-300 ${
                        formData.isContractor
                          ? "bg-orange text-navy font-semibold"
                          : "bg-white/5 text-white/60 font-medium hover:text-white/85"
                      }`}
                    >
                      Industry / Contractor
                    </button>
                  </div>
                </div>

                {/* Name & Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2"
                    >
                      <User size={14} className="text-orange" />
                      Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder={
                        formData.isContractor
                          ? "Company / contact name"
                          : "Your name"
                      }
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2"
                    >
                      <Mail size={14} className="text-orange" />
                      Email *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="your@email.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="quote-phone"
                    className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2"
                  >
                    <Phone size={14} className="text-orange" />
                    Phone{" "}
                    <span className="text-white/50 font-normal">(optional)</span>
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    maxLength={40}
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="Useful for quick follow-up"
                    className={inputClasses}
                  />
                </div>

                {/* Location & Number of Trees */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-location"
                      className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2"
                    >
                      <MapPin size={14} className="text-orange" />
                      Location *
                    </label>
                    <input
                      id="quote-location"
                      type="text"
                      required
                      maxLength={200}
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      placeholder="Suburb or address"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quote-tree-count"
                      className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2"
                    >
                      <TreePine size={14} className="text-orange" />
                      Number of trees *
                    </label>
                    <div className="relative">
                      <select
                        id="quote-tree-count"
                        required
                        value={formData.treeCount}
                        onChange={(e) =>
                          updateField("treeCount", e.target.value)
                        }
                        className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                      >
                        <option value="" disabled className="bg-navy">
                          Select
                        </option>
                        <option value="1" className="bg-navy">
                          1 tree
                        </option>
                        <option value="2-3" className="bg-navy">
                          2–3 trees
                        </option>
                        <option value="4-6" className="bg-navy">
                          4–6 trees
                        </option>
                        <option value="7-10" className="bg-navy">
                          7–10 trees
                        </option>
                        <option value="10+" className="bg-navy">
                          10+ trees
                        </option>
                        <option value="large-site" className="bg-navy">
                          Large site / multiple areas
                        </option>
                      </select>
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Service type */}
                <div>
                  <label
                    htmlFor="quote-service"
                    className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2"
                  >
                    <Wrench size={14} className="text-orange" />
                    What work are you looking for? *
                  </label>
                  <div className="relative">
                    <select
                      id="quote-service"
                      required
                      value={formData.serviceType}
                      onChange={(e) =>
                        updateField("serviceType", e.target.value)
                      }
                      className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                    >
                      <option value="" disabled className="bg-navy">
                        Select a service
                      </option>
                      {currentServices.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-navy"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50"
                    />
                  </div>
                </div>

                {/* Urgency — native radios styled as cards */}
                <fieldset>
                  <legend className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
                    <Clock size={14} className="text-orange" />
                    Urgency
                  </legend>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {urgencyOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`py-3 px-3 rounded-xl text-center transition-all duration-200 border cursor-pointer has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-orange ${
                          formData.urgency === option.value
                            ? "bg-orange/20 border-orange/50 text-orange-light"
                            : "bg-white/5 border-white/10 text-white/60 hover:border-white/25 hover:text-white/80"
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={() => updateField("urgency", option.value)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium block">
                          {option.label}
                        </span>
                        <span className="text-[11px] opacity-90 block mt-0.5">
                          {option.description}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Description */}
                <div>
                  <label
                    htmlFor="quote-description"
                    className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2"
                  >
                    <MessageSquare size={14} className="text-orange" />
                    Tell us more
                  </label>
                  <textarea
                    id="quote-description"
                    maxLength={5000}
                    value={formData.description}
                    onChange={(e) =>
                      updateField("description", e.target.value)
                    }
                    placeholder={
                      formData.isContractor
                        ? "Describe the scope of work, site access, any specific requirements..."
                        : "Describe any concerns, what you'd like done, tree species if known..."
                    }
                    rows={4}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Image upload */}
                <div>
                  <span
                    id="quote-upload-label"
                    className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2"
                  >
                    <ImageIcon size={14} className="text-orange" />
                    Upload photos of your trees
                    <span className="text-white/50 font-normal">
                      (optional, max 5)
                    </span>
                  </span>

                  {/* Upload zone — a real button so it works from the keyboard */}
                  <button
                    type="button"
                    aria-labelledby="quote-upload-label"
                    aria-describedby="quote-upload-hint"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-white/15 rounded-xl p-6 text-center cursor-pointer hover:border-orange/40 focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 transition-colors duration-300 group"
                  >
                    <Upload
                      size={24}
                      aria-hidden="true"
                      className="mx-auto mb-2 text-white/40 group-hover:text-orange/70 transition-colors"
                    />
                    <span className="block text-sm text-white/60 group-hover:text-white/80 transition-colors">
                      Click to upload images
                    </span>
                    <span
                      id="quote-upload-hint"
                      className="block text-xs text-white/50 mt-1"
                    >
                      JPG, PNG or WebP — up to 4MB total
                    </span>
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {/* Rejected-file feedback */}
                  <p aria-live="polite" className="mt-2 text-xs text-orange-light">
                    {uploadNotice}
                  </p>

                  {/* Image previews */}
                  <AnimatePresence>
                    {formData.images.length > 0 && (
                      <m.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 flex flex-wrap gap-3"
                      >
                        {formData.images.map((file, i) => (
                          <m.div
                            key={imageUrls[i]}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="relative w-20 h-20 rounded-lg overflow-hidden group/img"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={imageUrls[i]}
                              alt={`Photo ${i + 1}: ${file.name}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(i)}
                              aria-label={`Remove photo ${i + 1}`}
                              className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 focus-visible:opacity-100 transition-opacity flex items-center justify-center"
                            >
                              <X size={16} className="text-white" />
                            </button>
                          </m.div>
                        ))}
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {status === "error" && (
                    <m.div
                      role="alert"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-300 text-sm"
                    >
                      {errorMessage}
                    </m.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-orange text-navy px-8 py-4 rounded-full font-semibold text-base hover:bg-orange-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                <p className="text-center text-white/50 text-xs">
                  Jordan typically responds within 24 hours. Your information is
                  kept private and never shared.
                </p>
              </m.form>
            )}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
