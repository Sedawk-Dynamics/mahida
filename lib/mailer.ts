import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

let cached: Transporter | null = null;

export function mailerConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
  );
}

export function getTransporter(): Transporter {
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === "465", // 465 = implicit TLS, 587 = STARTTLS
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return cached;
}

const FROM = process.env.SMTP_FROM || "MAHIDHA <info@mahidha.com>";
const TO = process.env.CONTACT_TO || "info@mahidha.com";

/* minimal HTML escaping for values interpolated into the email body */
export function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface SendArgs {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

/* Sends mail when SMTP is configured. In environments without credentials
   (e.g. local dev), it no-ops with a warning so the UI flow still works —
   the form never leaks SMTP errors to the client. */
export async function sendMail({ subject, html, text, replyTo }: SendArgs): Promise<void> {
  if (!mailerConfigured()) {
    console.warn(
      "[mailer] SMTP not configured — skipping send. Set SMTP_* env vars to enable email.",
    );
    return;
  }
  const transporter = getTransporter();
  await transporter.sendMail({ from: FROM, to: TO, replyTo, subject, html, text });
}

/* Very small in-memory rate limiter (per serverless instance). */
const hits = new Map<string, number[]>();
export function rateLimited(key: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(key, arr);
  return arr.length > limit;
}
