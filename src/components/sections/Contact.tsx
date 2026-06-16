"use client";

import { useState, type FormEvent } from "react";

import { sendEmail } from "@/app/actions/sendEmail";
import { EyebrowBadge } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-[#050508] px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-[#7c3aed]/50 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/25";
const labelClass = "text-sm font-medium text-zinc-200";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-[#8b5cf6]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? <span className="text-[#a78bfa]"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

function QuoteForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const result = await sendEmail(new FormData(form));

    if (result.success) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col gap-3 rounded-xl border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-5 py-6"
        role="status"
      >
        <p className="text-base font-semibold text-zinc-100">{t.form.successTitle}</p>
        <p className="text-sm leading-relaxed text-zinc-300">{t.form.successBody}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 w-fit text-sm font-medium text-[#a78bfa] transition-colors hover:text-[#c4b5fd]"
        >
          {t.form.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="companyWebsite">{t.form.companyWebsiteLabel}</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label={t.form.nameLabel} required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            className={fieldClass}
            placeholder={t.form.namePlaceholder}
          />
        </Field>
        <Field id="email" label={t.form.emailLabel} required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            className={fieldClass}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="phone" label={t.form.phoneLabel}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            className={fieldClass}
            placeholder="+354 ..."
          />
        </Field>
        <Field id="businessName" label={t.form.businessNameLabel}>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            maxLength={120}
            className={fieldClass}
            placeholder={t.form.optionalPlaceholder}
          />
        </Field>
      </div>

      <Field id="projectType" label={t.form.projectTypeLabel} required>
        <select id="projectType" name="projectType" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {t.form.projectTypePlaceholder}
          </option>
          {t.form.projectTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="language" label={t.form.languageLabel}>
          <select id="language" name="language" defaultValue="" className={fieldClass}>
            <option value="">{t.form.optionalPlaceholder}</option>
            {t.form.languages.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="timeline" label={t.form.timelineLabel}>
          <select id="timeline" name="timeline" defaultValue="" className={fieldClass}>
            <option value="">{t.form.optionalPlaceholder}</option>
            {t.form.timelines.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="budgetRange" label={t.form.budgetRangeLabel}>
        <select id="budgetRange" name="budgetRange" defaultValue="" className={fieldClass}>
          <option value="">{t.form.optionalPlaceholder}</option>
          {t.form.budgetRanges.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="projectDetails" label={t.form.projectDetailsLabel} required>
        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={5}
          maxLength={5000}
          className={`${fieldClass} min-h-[120px] resize-y`}
          placeholder={t.form.projectDetailsPlaceholder}
        />
      </Field>

      {status === "error" ? (
        <p
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
          role="alert"
        >
          {t.form.genericError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.25)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? t.form.submitting : t.form.submit}
      </button>

      <p className="text-xs leading-relaxed text-white/45">{t.form.consent}</p>
    </form>
  );
}

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <EyebrowBadge>{t.contact.eyebrow}</EyebrowBadge>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {t.contact.titleLine1}
            <br />
            <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.contact.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          <div className="flex h-full min-w-0 flex-col gap-5 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7">
            <h3 className="text-xl font-semibold text-zinc-100">{t.contact.leftTitle}</h3>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              {t.contact.leftDescription}
            </p>
            <ul className="flex flex-col gap-3">
              {t.contact.services.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckIcon />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-auto text-xs leading-relaxed text-white/50 sm:text-sm">
              {t.contact.leftFootnote}
            </p>
          </div>

          <div className="flex h-full min-w-0 flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7">
            <h3 className="text-xl font-semibold text-zinc-100">{t.contact.rightTitle}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.contact.rightDescription}
            </p>
            <QuoteForm />
            <p className="text-xs leading-relaxed text-white/50 sm:text-sm">
              {t.contact.rightFootnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
