import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail, esc, rateLimited } from "@/lib/mailer";

export const runtime = "nodejs"; // Nodemailer needs Node APIs, not Edge

const schema = z.object({
  email: z.email().max(200),
  company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  if (rateLimited(`newsletter:${ip}`)) {
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
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const { email, company } = parsed.data;
  if (company && company.trim()) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendMail({
      subject: "New newsletter signup",
      replyTo: email,
      text: `New newsletter signup: ${email}`,
      html: `<h2 style="font-family:Georgia,serif">New newsletter signup</h2><p><strong>Email:</strong> ${esc(email)}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[newsletter] send failed", e);
    return NextResponse.json(
      { ok: false, error: "We couldn't add you right now. Please try again later." },
      { status: 500 },
    );
  }
}
