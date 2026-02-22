"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const services = [
  "Video Production",
  "Photography",
  "Web Design / Development",
  "Graphic Design / Branding",
  "Print Materials",
  "AI-Powered Content",
  "Ad Campaigns (Creative)",
  "Ad Management (Running Ads)",
  "Social Media Content",
  "Other",
];

const businessStages = [
  { id: "idea", label: "I have an idea but haven\u2019t launched yet" },
  { id: "new", label: "I\u2019ve been in business less than 1 year" },
  { id: "established", label: "I\u2019m established (1\u20135 years) but need to grow" },
  { id: "scaling", label: "I\u2019m scaling an established business (5+ years)" },
];

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: "",
    leadSource: "",
    businessStage: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    services: [] as string[],
    q9: "",
    q10: "",
    q11: "",
    q12: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function toggleService(service: string) {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  function selectStage(stageId: string) {
    setFormData((prev) => ({ ...prev, businessStage: stageId }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const body = [
      `FULL NAME: ${formData.name}`,
      `BUSINESS NAME: ${formData.business}`,
      `EMAIL: ${formData.email}`,
      `PHONE: ${formData.phone}`,
      `WEBSITE / SOCIAL: ${formData.website}`,
      `HOW DID YOU HEAR ABOUT US: ${formData.leadSource}`,
      `BUSINESS STAGE: ${businessStages.find((s) => s.id === formData.businessStage)?.label || "Not selected"}`,
      ``,
      `--- YOUR BUSINESS ---`,
      `1. What is your business and what do you do?`,
      formData.q1,
      ``,
      `2. What industry or niche do you serve?`,
      formData.q2,
      ``,
      `3. What makes you different from your competitors?`,
      formData.q3,
      ``,
      `--- CHALLENGES & GOALS ---`,
      `4. Top 3 challenges or frustrations?`,
      formData.q4,
      ``,
      `5. What does success look like in 6 months? 1 year?`,
      formData.q5,
      ``,
      `6. What are you hoping to get out of this consultation?`,
      formData.q6,
      ``,
      `--- TIMELINE ---`,
      `7. Ideal timeline or hard deadlines?`,
      formData.q7,
      ``,
      `--- SERVICES INTERESTED IN ---`,
      `8. ${formData.services.join(", ") || "None selected"}`,
      ``,
      `--- EXISTING ASSETS ---`,
      `9. ${formData.q9}`,
      ``,
      `--- COMPETITORS & INSPIRATION ---`,
      `10. Top 3 competitors: ${formData.q10}`,
      `11. Brands you admire: ${formData.q11}`,
      ``,
      `--- ANYTHING ELSE ---`,
      `12. ${formData.q12}`,
    ].join("\n");

    // mailto fallback
    const subject = `Consultation Inquiry from ${formData.name} — ${formData.business}`;
    const mailtoLink = `mailto:taylormademd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Brief delay so the mailto opens, then show confirmation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[2px] bg-gold mx-auto mb-8"
          />
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Thank You
          </p>
          <h1 className="heading-lg mb-6">
            FOR SHARING <span className="text-gradient-gold">YOUR STORY</span>
          </h1>
          <p className="body-lg mb-4">
            Your email client should have opened with your responses.
            Hit send and I&apos;ll be in touch shortly.
          </p>
          <p className="font-body text-sm text-white/30 mb-12">
            If your email client didn&apos;t open, you can send your responses
            directly to{" "}
            <a
              href="mailto:taylormademd@gmail.com"
              className="text-gold hover:text-gold-light transition-colors"
            >
              taylormademd@gmail.com
            </a>
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                business: "",
                email: "",
                phone: "",
                website: "",
                leadSource: "",
                businessStage: "",
                q1: "",
                q2: "",
                q3: "",
                q4: "",
                q5: "",
                q6: "",
                q7: "",
                services: [],
                q9: "",
                q10: "",
                q11: "",
                q12: "",
              });
            }}
            className="font-display text-sm uppercase tracking-[0.2em] text-gold border border-gold/40 px-8 py-3 hover:bg-gold hover:text-bg transition-all duration-300"
          >
            Submit Another
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[2px] bg-gold mb-8"
        />
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-xs uppercase tracking-[0.3em] text-gold"
          >
            Pre-Consultation Intake
          </motion.p>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl"
          >
            BUSINESS
            <br />
            <span className="text-gradient-gold">Consultation</span>
          </motion.h1>
        </div>
        <FadeIn delay={0.8}>
          <p className="body-lg max-w-2xl">
            Take a few minutes to complete this intake form before our
            consultation. Your answers help me prepare and make the most of
            our time together.
          </p>
          <p className="font-body text-sm text-gold/60 mt-4 italic">
            If a question doesn&apos;t apply yet, simply write &ldquo;N/A&rdquo; &mdash;
            that&apos;s valuable information too.
          </p>
        </FadeIn>
      </section>

      {/* Form */}
      <section className="section-padding pb-28">
        <form onSubmit={handleSubmit} className="max-w-3xl">
          {/* ─── SECTION 01: ABOUT YOU ─── */}
          <FadeUp>
            <SectionHeader number="01" title="ABOUT YOU" />
          </FadeUp>

          <StaggerContainer className="space-y-0">
            <StaggerItem>
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </StaggerItem>
            <StaggerItem>
              <InputField
                label="Business Name"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
              />
            </StaggerItem>
            <StaggerItem>
              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </StaggerItem>
            <StaggerItem>
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </StaggerItem>
            <StaggerItem>
              <InputField
                label="Website / Social Media"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="URL or @handle"
              />
            </StaggerItem>
            <StaggerItem>
              <InputField
                label="How Did You Hear About Us?"
                name="leadSource"
                value={formData.leadSource}
                onChange={handleChange}
              />
            </StaggerItem>
          </StaggerContainer>

          {/* Business Stage */}
          <FadeUp className="mt-10 mb-14">
            <p className="font-display text-sm uppercase tracking-[0.15em] text-white/30 mb-5">
              Which best describes where you are right now?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {businessStages.map((stage) => (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => selectStage(stage.id)}
                  className={`text-left p-4 border transition-all duration-300 ${
                    formData.businessStage === stage.id
                      ? "border-gold bg-gold/5 text-cream"
                      : "border-white/[0.08] text-white/40 hover:border-white/20 hover:text-white/60"
                  }`}
                >
                  <span className="font-body text-sm leading-snug">
                    {stage.label}
                  </span>
                </button>
              ))}
            </div>
          </FadeUp>

          {/* ─── SECTION 02: YOUR BUSINESS ─── */}
          <FadeUp>
            <SectionHeader number="02" title="YOUR BUSINESS" />
          </FadeUp>

          <StaggerContainer className="space-y-0">
            <StaggerItem>
              <TextareaField
                number="1"
                question="What is your business and what do you do?"
                hint="Products, services, or offerings in your own words."
                name="q1"
                value={formData.q1}
                onChange={handleChange}
              />
            </StaggerItem>
            <StaggerItem>
              <InputField
                label="2. What industry or niche do you serve?"
                name="q2"
                value={formData.q2}
                onChange={handleChange}
                isQuestion
              />
            </StaggerItem>
            <StaggerItem>
              <TextareaField
                number="3"
                question="What makes you different from your competitors?"
                name="q3"
                value={formData.q3}
                onChange={handleChange}
              />
            </StaggerItem>
          </StaggerContainer>

          {/* ─── SECTION 03: CHALLENGES & GOALS ─── */}
          <FadeUp>
            <SectionHeader number="03" title="CHALLENGES & GOALS" />
          </FadeUp>

          <StaggerContainer className="space-y-0">
            <StaggerItem>
              <TextareaField
                number="4"
                question="What are the top 3 challenges or frustrations in your business right now?"
                hint="Be specific. The more detail, the better I can help."
                name="q4"
                value={formData.q4}
                onChange={handleChange}
                rows={4}
              />
            </StaggerItem>
            <StaggerItem>
              <TextareaField
                number="5"
                question="What does success look like for you 6 months from now? 1 year?"
                name="q5"
                value={formData.q5}
                onChange={handleChange}
              />
            </StaggerItem>
            <StaggerItem>
              <TextareaField
                number="6"
                question="What are you hoping to get out of this consultation?"
                name="q6"
                value={formData.q6}
                onChange={handleChange}
              />
            </StaggerItem>
          </StaggerContainer>

          {/* ─── SECTION 04: TIMELINE ─── */}
          <FadeUp>
            <SectionHeader number="04" title="TIMELINE" />
          </FadeUp>

          <FadeUp>
            <InputField
              label="7. Is there an ideal timeline or any hard deadlines?"
              name="q7"
              value={formData.q7}
              onChange={handleChange}
              placeholder="Upcoming launch, seasonal event, etc."
              isQuestion
            />
          </FadeUp>

          {/* ─── SECTION 05: WHAT DO YOU NEED? ─── */}
          <FadeUp>
            <SectionHeader number="05" title="WHAT DO YOU NEED?" />
          </FadeUp>

          <FadeUp className="mb-10">
            <p className="font-display text-sm uppercase tracking-[0.15em] text-cream mb-2">
              8. Which services are you interested in?
            </p>
            <p className="font-body text-xs text-gold/50 italic mb-5">
              Select all that apply
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`flex items-center gap-3 text-left p-4 border transition-all duration-300 ${
                    formData.services.includes(service)
                      ? "border-gold bg-gold/5"
                      : "border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <div
                    className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      formData.services.includes(service)
                        ? "border-gold bg-gold"
                        : "border-white/20"
                    }`}
                  >
                    {formData.services.includes(service) && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 text-bg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    )}
                  </div>
                  <span
                    className={`font-body text-sm transition-colors duration-300 ${
                      formData.services.includes(service)
                        ? "text-cream"
                        : "text-white/40"
                    }`}
                  >
                    {service}
                  </span>
                </button>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <TextareaField
              number="9"
              question="Do you already have a logo, website, brand photos, or video content?"
              hint="List what you have. This helps me understand if we're building from scratch or upgrading."
              name="q9"
              value={formData.q9}
              onChange={handleChange}
            />
          </FadeUp>

          {/* ─── SECTION 06: COMPETITORS & INSPIRATION ─── */}
          <FadeUp>
            <SectionHeader number="06" title="COMPETITORS & INSPIRATION" />
          </FadeUp>

          <StaggerContainer className="space-y-0">
            <StaggerItem>
              <TextareaField
                number="10"
                question="Who are your top 3 competitors?"
                hint="What do they do well? Share names, websites, or social links."
                name="q10"
                value={formData.q10}
                onChange={handleChange}
              />
            </StaggerItem>
            <StaggerItem>
              <TextareaField
                number="11"
                question="What brands or businesses do you admire and want to be like?"
                hint="What do you like about their branding, content, or experience?"
                name="q11"
                value={formData.q11}
                onChange={handleChange}
              />
            </StaggerItem>
          </StaggerContainer>

          {/* ─── SECTION 07: ANYTHING ELSE ─── */}
          <FadeUp>
            <SectionHeader number="07" title="ANYTHING ELSE" />
          </FadeUp>

          <FadeUp>
            <TextareaField
              number="12"
              question="Is there anything else you want me to know before our call?"
              name="q12"
              value={formData.q12}
              onChange={handleChange}
            />
          </FadeUp>

          {/* Submit */}
          <FadeUp className="mt-16">
            <div className="border-t border-white/[0.06] pt-10">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto font-display text-sm uppercase tracking-[0.2em] text-bg bg-gold px-12 py-4 hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Preparing..." : "Submit Intake Form"}
              </button>
              <p className="font-body text-xs text-white/20 mt-4">
                This will open your email client with your responses pre-filled.
              </p>
            </div>
          </FadeUp>
        </form>
      </section>
    </>
  );
}

/* ─── Sub-Components ─── */

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="mt-14 mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-display text-sm text-gold">{number}</span>
        <span className="font-display font-bold text-sm uppercase tracking-[0.15em] text-cream">
          {title}
        </span>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-gold via-gold/40 to-transparent" />
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  isQuestion = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  isQuestion?: boolean;
}) {
  return (
    <div className="py-4">
      <label
        htmlFor={name}
        className={`block mb-3 ${
          isQuestion
            ? "font-display text-sm uppercase tracking-[0.15em] text-cream"
            : "font-display text-xs uppercase tracking-[0.15em] text-white/30"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/[0.1] focus:border-gold py-3 font-body text-cream outline-none transition-colors duration-300 placeholder:text-white/15"
      />
    </div>
  );
}

function TextareaField({
  number,
  question,
  hint,
  name,
  value,
  onChange,
  rows = 3,
}: {
  number: string;
  question: string;
  hint?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}) {
  return (
    <div className="py-5">
      <label
        htmlFor={name}
        className="font-display text-sm uppercase tracking-[0.15em] text-cream mb-1 block"
      >
        {number}. {question}
      </label>
      {hint && (
        <p className="font-body text-xs text-gold/50 italic mb-3">{hint}</p>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full bg-transparent border-b border-white/[0.1] focus:border-gold py-3 font-body text-cream outline-none transition-colors duration-300 resize-none placeholder:text-white/15"
      />
    </div>
  );
}
