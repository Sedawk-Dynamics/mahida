"use client";

interface ApiResult {
  ok: boolean;
  error?: string;
}

async function postJSON(url: string, body: unknown): Promise<ApiResult> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as ApiResult;
  if (!res.ok || !data.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }
  return data;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot
}

export const subscribe = (email: string, company = "") =>
  postJSON("/api/newsletter", { email, company });

export const sendContact = (payload: ContactPayload) =>
  postJSON("/api/contact", payload);
