import { parsePublicFormConfig, type PublicFormConfig } from "@sveinssons-dev/form-kit-core";

/** Trailing slash matches next.config.ts trailingSlash: true. */
export const CONTACT_ENDPOINT = "/api/contact/";

export const publicFormConfig: PublicFormConfig = parsePublicFormConfig({
  title: "Project request",
  introduction: "Tell us about your website. Fields marked with an asterisk are required.",
  confirmationText: "Thank you. We received your project request and will be in touch soon.",
  submitLabel: "Send project request",
  replyToFieldId: "email",
  // Neutral name: avoid company/website/fax autofill heuristics.
  honeypotFieldName: "contactReference",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Name",
      required: true,
      maxLength: 100,
      autocomplete: "name",
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      required: true,
      maxLength: 254,
      autocomplete: "email",
    },
    {
      id: "phone",
      type: "telephone",
      label: "Phone",
      required: false,
      maxLength: 30,
      autocomplete: "tel",
    },
    {
      id: "businessName",
      type: "text",
      label: "Business name",
      required: false,
      maxLength: 120,
      autocomplete: "organization",
    },
    {
      id: "projectType",
      type: "select",
      label: "Project type",
      required: true,
      options: [
        { value: "Custom website", label: "Custom website" },
        { value: "Online store", label: "Online store" },
        { value: "Portfolio", label: "Portfolio" },
        { value: "Landing page", label: "Landing page" },
        { value: "Maintenance", label: "Maintenance" },
        { value: "Not sure yet", label: "Not sure yet" },
      ],
    },
    {
      id: "language",
      type: "select",
      label: "Language",
      required: false,
      options: [
        { value: "Icelandic", label: "Icelandic" },
        { value: "English", label: "English" },
        { value: "Both", label: "Both" },
        { value: "Not sure yet", label: "Not sure yet" },
      ],
    },
    {
      id: "timeline",
      type: "select",
      label: "Timeline",
      required: false,
      options: [
        { value: "As soon as possible", label: "As soon as possible" },
        { value: "Within 1 month", label: "Within 1 month" },
        { value: "1–3 months", label: "1–3 months" },
        { value: "No fixed deadline", label: "No fixed deadline" },
      ],
    },
    {
      id: "budgetRange",
      type: "select",
      label: "Budget range",
      required: false,
      options: [
        { value: "Under 150,000 ISK", label: "Under 150,000 ISK" },
        { value: "150,000–300,000 ISK", label: "150,000–300,000 ISK" },
        { value: "300,000–500,000 ISK", label: "300,000–500,000 ISK" },
        { value: "500,000+ ISK", label: "500,000+ ISK" },
        { value: "Not sure yet", label: "Not sure yet" },
      ],
    },
    {
      id: "projectDetails",
      type: "textarea",
      label: "Project details",
      required: true,
      maxLength: 5000,
    },
    {
      id: "privacy",
      type: "checkbox",
      label: "I agree that Sveinssons may contact me about this enquiry",
      required: true,
    },
  ],
  messages: {
    validationSummary: "Please fix the errors below.",
    genericError: "Something went wrong. Please try again.",
    rateLimited: "Please wait before sending another message.",
    submittingLive: "Sending your message.",
    successLive: "Your message was sent.",
  },
});
