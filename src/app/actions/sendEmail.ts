"use server";

import nodemailer from "nodemailer";

type SendResult = { success: true } | { success: false; error: string };

// Order + labels for the readable email body. companyWebsite is a honeypot, not listed.
const FIELDS: { key: string; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "businessName", label: "Business name" },
  { key: "projectType", label: "Project type" },
  { key: "language", label: "Language" },
  { key: "timeline", label: "Timeline" },
  { key: "budgetRange", label: "Budget range" },
  { key: "projectDetails", label: "Project details" },
];

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendEmail(formData: FormData): Promise<SendResult> {
  // Honeypot: real users leave this empty. If filled, accept silently and send nothing.
  if (field(formData, "companyWebsite")) {
    return { success: true };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const projectDetails = field(formData, "projectDetails");

  if (!name || !email || !projectDetails) {
    return { success: false, error: "Please fill in the required fields." };
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.RECIPIENT_EMAIL;

  if (!user || !pass || !recipient) {
    return { success: false, error: "Email service is not configured." };
  }

  const body = FIELDS.map(({ key, label }) => {
    const value = field(formData, key);
    return value ? `${label}: ${value}` : null;
  })
    .filter(Boolean)
    .join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to: recipient,
      replyTo: email,
      subject: `New project request — ${name}`,
      text: body,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Unable to send your message right now." };
  }
}
