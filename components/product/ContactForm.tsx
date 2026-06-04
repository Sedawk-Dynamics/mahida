"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { sendContact } from "@/lib/api-client";

type Field = "name" | "email" | "subject" | "message";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [company, setCompany] = useState("");
  const [form, setForm] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      await sendContact({ ...form, company });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const field = (label: string, key: Field, type = "text", area = false) => (
    <label className="block">
      <span className="font-sans text-[12px] tracking-nav uppercase text-charcoal">{label}</span>
      {area ? (
        <textarea
          required
          rows={5}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="mt-2 w-full border border-charcoal/20 rounded-btn px-4 py-3 bg-pearl text-[15px] focus:outline-none focus:border-gold"
        />
      ) : (
        <input
          required
          type={type}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="mt-2 w-full border border-charcoal/20 rounded-btn px-4 py-3 bg-pearl text-[15px] focus:outline-none focus:border-gold"
        />
      )}
    </label>
  );

  if (sent) {
    return (
      <div className="bg-beige rounded-btn p-10 text-center">
        <Icons.sparkle size={36} stroke="#C4A87A" />
        <h3 className="mt-4 font-serif text-[28px] text-charcoal">Thank you</h3>
        <p className="mt-2 text-taupe">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid sm:grid-cols-2 gap-5">
        {field("Name", "name")}
        {field("Email", "email", "email")}
      </div>
      {field("Subject", "subject")}
      {field("Message", "message", "text", true)}
      {error && <p className="text-taupe text-[13px] font-sans">{error}</p>}
      <Button type="submit" disabled={loading}>
        {loading ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
