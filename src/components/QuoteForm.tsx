"use client";

import { useState, useRef, useEffect, useMemo, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import {
  ArrowRight,
  Upload,
  X,
  CheckCircle,
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
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const updateField = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files).filter((file) => {
      if (!file.type.startsWith("image/")) return false;
      if (file.size > 10 * 1024 * 1024) return false; // 10MB limit
      return true;
    });

    updateField("images", [...formData.images, ...newFiles].slice(0, 5));

    // Reset input so same file can be selected again
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (index: number) => {
    updateField(
      "images",
      formData.images.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
        err instanceof Error ? err.message : "Something went wrong."
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
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 60px, white 60px, white 1px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 70%, rgba(249,115,22,0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-ember-400" />
            <span className="text-ember-400 text-sm font-medium tracking-[0.2em] uppercase">
              Get a Quote
            </span>
            <div className="h-px w-12 bg-ember-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
            Your trees deserve expert care.
            <br />
            <span className="text-ember-400">Tell Jordan what you need.</span>
          </h2>

          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Fill out the form below and Jordan will get back to you with a
            detailed quote. No obligation, no pressure.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-10 lg:p-14 border border-white/10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-forest-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-forest-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Quote request sent
                </h3>
                <p className="text-white/60 leading-relaxed max-w-md mx-auto">
                  Thanks for reaching out. Jordan will review your details and
                  get back to you shortly, usually within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
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
                  className="mt-8 text-sm text-ember-400 hover:text-ember-300 transition-colors"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 space-y-8"
              >
                {/* Contractor toggle */}
                <div>
                  <label className="text-white/80 text-sm font-medium mb-3 block">
                    I&apos;m enquiring as&hellip;
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-white/15">
                    <button
                      type="button"
                      onClick={() => {
                        updateField("isContractor", false);
                        updateField("serviceType", "");
                      }}
                      className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 ${
                        !formData.isContractor
                          ? "bg-ember-500 text-white"
                          : "bg-white/5 text-white/50 hover:text-white/70"
                      }`}
                    >
                      Property Owner
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        updateField("isContractor", true);
                        updateField("serviceType", "");
                      }}
                      className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 ${
                        formData.isContractor
                          ? "bg-ember-500 text-white"
                          : "bg-white/5 text-white/50 hover:text-white/70"
                      }`}
                    >
                      Industry / Contractor
                    </button>
                  </div>
                </div>

                {/* Name & Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-name" className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                      <User size={14} className="text-ember-400" />
                      Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder={
                        formData.isContractor
                          ? "Company / contact name"
                          : "Your name"
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-ember-400/50 focus:ring-1 focus:ring-ember-400/25 invalid:border-red-500/50 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                      <Mail size={14} className="text-ember-400" />
                      Email *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-ember-400/50 focus:ring-1 focus:ring-ember-400/25 invalid:border-red-500/50 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="quote-phone" className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <Phone size={14} className="text-ember-400" />
                    Phone
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="Optional, but useful for quick follow-up"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-ember-400/50 focus:ring-1 focus:ring-ember-400/25 transition-all text-sm"
                  />
                </div>

                {/* Location & Number of Trees */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-location" className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                      <MapPin size={14} className="text-ember-400" />
                      Location *
                    </label>
                    <input
                      id="quote-location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      placeholder="Suburb or address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-ember-400/50 focus:ring-1 focus:ring-ember-400/25 invalid:border-red-500/50 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-tree-count" className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                      <TreePine size={14} className="text-ember-400" />
                      Number of trees *
                    </label>
                    <select
                      id="quote-tree-count"
                      required
                      value={formData.treeCount}
                      onChange={(e) => updateField("treeCount", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ember-400/50 focus:ring-1 focus:ring-ember-400/25 invalid:border-red-500/50 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-forest-900">
                        Select
                      </option>
                      <option value="1" className="bg-forest-900">
                        1 tree
                      </option>
                      <option value="2-3" className="bg-forest-900">
                        2–3 trees
                      </option>
                      <option value="4-6" className="bg-forest-900">
                        4–6 trees
                      </option>
                      <option value="7-10" className="bg-forest-900">
                        7–10 trees
                      </option>
                      <option value="10+" className="bg-forest-900">
                        10+ trees
                      </option>
                      <option value="large-site" className="bg-forest-900">
                        Large site / multiple areas
                      </option>
                    </select>
                  </div>
                </div>

                {/* Service type */}
                <div>
                  <label htmlFor="quote-service" className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <Wrench size={14} className="text-ember-400" />
                    What work are you looking for? *
                  </label>
                  <select
                    id="quote-service"
                    required
                    value={formData.serviceType}
                    onChange={(e) =>
                      updateField("serviceType", e.target.value)
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ember-400/50 focus:ring-1 focus:ring-ember-400/25 invalid:border-red-500/50 transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-forest-900">
                      Select a service
                    </option>
                    {currentServices.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-forest-900"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <span className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
                    <Clock size={14} className="text-ember-400" />
                    Urgency
                  </span>
                  <div role="radiogroup" aria-label="Urgency" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {urgencyOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        role="radio"
                        aria-checked={formData.urgency === option.value}
                        onClick={() => updateField("urgency", option.value)}
                        className={`py-3 px-3 rounded-xl text-center transition-all duration-200 border ${
                          formData.urgency === option.value
                            ? "bg-ember-500/20 border-ember-400/50 text-ember-300"
                            : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white/70"
                        }`}
                      >
                        <span className="text-sm font-medium block">
                          {option.label}
                        </span>
                        <span className="text-[11px] opacity-60 block mt-0.5">
                          {option.description}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="quote-description" className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <MessageSquare size={14} className="text-ember-400" />
                    Tell us more
                  </label>
                  <textarea
                    id="quote-description"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-ember-400/50 focus:ring-1 focus:ring-ember-400/25 transition-all text-sm resize-none"
                  />
                </div>

                {/* Image upload */}
                <div>
                  <label className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
                    <ImageIcon size={14} className="text-ember-400" />
                    Upload photos of your trees
                    <span className="text-white/30 font-normal">
                      (optional, max 5)
                    </span>
                  </label>

                  {/* Upload zone */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-white/15 rounded-xl p-6 text-center cursor-pointer hover:border-ember-400/40 transition-colors duration-300 group"
                  >
                    <Upload
                      size={24}
                      className="mx-auto mb-2 text-white/30 group-hover:text-ember-400/60 transition-colors"
                    />
                    <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                      Click to upload images
                    </p>
                    <p className="text-xs text-white/25 mt-1">
                      JPG, PNG up to 10MB each
                    </p>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {/* Image previews */}
                  <AnimatePresence>
                    {formData.images.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 flex flex-wrap gap-3"
                      >
                        {formData.images.map((file, i) => (
                          <motion.div
                            key={`${file.name}-${i}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="relative w-20 h-20 rounded-lg overflow-hidden group/img"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={imageUrls[i]}
                              alt={`Upload ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(i)}
                              className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center"
                            >
                              <X size={16} className="text-white" />
                            </button>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-300 text-sm"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-ember-500 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-ember-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
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

                <p className="text-center text-white/25 text-xs">
                  Jordan typically responds within 24 hours. Your information is
                  kept private and never shared.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
