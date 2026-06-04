import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail, esc, rateLimited } from "@/lib/mailer";

export const runtime = "nodejs"; // Nodemailer needs Node APIs, not Edge

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.email().max(200),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
  company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  if (rateLimited(`contact:${ip}`)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please complete all fields with a valid email address." },
      { status: 400 },
    );
  }

  const { name, email, subject, message, company } = parsed.data;
  if (company && company.trim()) {
    // Honeypot tripped — silently accept to avoid tipping off bots.
    return NextResponse.json({ ok: true });
  }

  try {
    await sendMail({
      subject: `New contact form: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `<h2 style="font-family:Georgia,serif">New contact message</h2>
<p><strong>Name:</strong> ${esc(name)}</p>
<p><strong>Email:</strong> ${esc(email)}</p>
<p><strong>Subject:</strong> ${esc(subject)}</p>
<p style="white-space:pre-wrap">${esc(message)}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] send failed", e);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please try again later." },
      { status: 500 },
    );
  }
}
