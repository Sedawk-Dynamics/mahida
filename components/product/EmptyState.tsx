"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import { subscribe } from "@/lib/api-client";

export default function EmptyState() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError("");
    try {
      await subscribe(email, company);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center py-20 max-w-md mx-auto">
      <Icons.sparkle size={36} stroke="#C4A87A" />
      <h3 className="mt-5 font-serif text-[30px] text-charcoal">No products yet</h3>
      <p className="mt-2 text-taupe">
        New pieces arriving soon. Join the list to be the first to know.
      </p>
      <form
        className="mt-6 flex border border-charcoal/20 rounded-btn overflow-hidden"
        onSubmit={onSubmit}
      >
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
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email"
          className="flex-1 bg-transparent px-4 py-3 text-[14px] focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 bg-navy text-pearl hover:bg-navy-soft disabled:opacity-60"
          aria-label="Notify me"
        >
          <Icons.arrow size={18} />
        </button>
      </form>
      {done && (
        <p className="mt-3 text-gold text-[13px] font-sans tracking-nav uppercase">
          You&apos;re on the list ✦
        </p>
      )}
      {error && !done && <p className="mt-3 text-taupe text-[13px] font-sans">{error}</p>}
    </div>
  );
}
