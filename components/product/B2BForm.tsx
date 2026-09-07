"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

const WEB3FORMS_ACCESS_KEY = "cc58ea1b-f1ff-499b-9c21-19d09c777991";

const INTERESTS = [
  "Wholesale / Retail Stocking",
  "Boutique / Store Partnership",
  "Corporate Gifting",
  "Styling / Editorial Collaboration",
  "Hospitality / Luxury Partnerships",
  "Custom / Private Label",
  "Brand Collaboration",
  "Other",
];

const SOURCES = ["Instagram", "Website", "Referral", "Exhibition / Event", "Search", "Other"];

const CONNECT = ["Email", "WhatsApp", "Phone Call"];

type TextField =
  | "name"
  | "business"
  | "email"
  | "phone"
  | "location"
  | "website"
  | "about"
  | "lookingFor"
  | "message";

const inputCls =
  "mt-2 w-full border border-charcoal/20 rounded-btn px-4 py-3 bg-pearl text-[15px] focus:outline-none focus:border-gold";
const labelCls = "font-sans text-[12px] tracking-nav uppercase text-charcoal";

export default function B2BForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [interests, setInterests] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [connect, setConnect] = useState("");
  const [form, setForm] = useState<Record<TextField, string>>({
    name: "",
    business: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    about: "",
    lookingFor: "",
    message: "",
  });

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (interests.length === 0) {
      setError("Please select at least one option under “I'm interested in”.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "MAHIDHA Website — B2B",
          subject: `B2B Enquiry: ${form.business}`,
          "Full Name": form.name,
          "Business / Company Name": form.business,
          email: form.email,
          "Phone / WhatsApp": form.phone,
          "City & Country": form.location,
          "Website / Instagram": form.website || "—",
          "Interested In": interests.join(", "),
          "About the Business": form.about,
          "Looking For": form.lookingFor,
          "Heard About Mahidha Via": sources.join(", ") || "—",
          "Preferred Way to Connect": connect || "—",
          "Additional Information": form.message || "—",
          botcheck: company !== "",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Please try again.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const text = (label: string, key: TextField, opts: { type?: string; required?: boolean; area?: boolean; placeholder?: string } = {}) => (
    <label className="block">
      <span className={labelCls}>
        {label}
        {opts.required && <span className="text-gold"> *</span>}
      </span>
      {opts.area ? (
        <textarea
          required={opts.required}
          rows={4}
          placeholder={opts.placeholder}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className={inputCls}
        />
      ) : (
        <input
          required={opts.required}
          type={opts.type || "text"}
          placeholder={opts.placeholder}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className={inputCls}
        />
      )}
    </label>
  );

  const checkGroup = (
    label: string,
    options: string[],
    selected: string[],
    set: (v: string[]) => void,
    required = false,
  ) => (
    <fieldset>
      <legend className={labelCls}>
        {label}
        {required && <span className="text-gold"> *</span>}
      </legend>
      <div className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2.5 cursor-pointer text-[14px] text-charcoal/85">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => toggle(selected, set, opt)}
              className="h-4 w-4 accent-[#162033] border-charcoal/30"
            />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );

  if (sent) {
    return (
      <div className="bg-beige rounded-btn p-10 text-center">
        <Icons.sparkle size={36} stroke="#C4A87A" />
        <h3 className="mt-4 font-serif text-[28px] text-charcoal">Thank you for reaching out to Mahidha</h3>
        <p className="mt-3 text-taupe leading-relaxed">
          We&apos;ve received your enquiry and our team will get back to you shortly.
          <br />
          We look forward to exploring the possibilities of working together.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
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
      <div className="grid sm:grid-cols-2 gap-6">
        {text("Full Name", "name", { required: true, placeholder: "Enter your name" })}
        {text("Business / Company Name", "business", { required: true, placeholder: "Enter your business name" })}
        {text("Business Email", "email", { type: "email", required: true, placeholder: "Enter your business email" })}
        {text("Phone / WhatsApp Number", "phone", { type: "tel", required: true, placeholder: "Enter your contact number" })}
        {text("City & Country", "location", { required: true, placeholder: "Where is your business based?" })}
        {text("Website / Instagram", "website", { placeholder: "Share your website or Instagram handle" })}
      </div>
      {checkGroup("I'm Interested In", INTERESTS, interests, setInterests, true)}
      {text("Tell Us About Your Business", "about", {
        required: true,
        area: true,
        placeholder: "What do you do, and who do you serve?",
      })}
      {text("What Are You Looking For?", "lookingFor", {
        required: true,
        area: true,
        placeholder: "Tell us about your requirements, expected quantities, collaboration idea, or questions.",
      })}
      {checkGroup("How Did You Hear About Mahidha?", SOURCES, sources, setSources)}
      <fieldset>
        <legend className={labelCls}>Preferred Way to Connect</legend>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2.5">
          {CONNECT.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 cursor-pointer text-[14px] text-charcoal/85">
              <input
                type="radio"
                name="connect"
                checked={connect === opt}
                onChange={() => setConnect(opt)}
                className="h-4 w-4 accent-[#162033] border-charcoal/30"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>
      {text("Message / Additional Information", "message", {
        area: true,
        placeholder: "Anything else you'd like us to know?",
      })}
      {error && <p className="text-taupe text-[13px] font-sans">{error}</p>}
      <Button type="submit" disabled={loading}>
        {loading ? "Sending…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
