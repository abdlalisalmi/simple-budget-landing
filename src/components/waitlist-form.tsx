"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

type Status = "idle" | "sending" | "done" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          website: data.get("website"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className="mx-auto inline-flex items-center gap-3 rounded-full bg-mint px-6 py-4 text-[17px] font-bold text-on-mint"
      >
        <Icon name="check" className="text-xl" strokeWidth={3} />
        You&apos;re on the list! We&apos;ll be in touch soon.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto w-full max-w-[520px]">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@email.com"
          aria-invalid={status === "error"}
          aria-describedby="waitlist-msg"
          className="min-h-[58px] min-w-0 flex-1 rounded-full border border-[#2a302c] bg-[#1a201d] px-6 text-[17px] text-white outline-none placeholder:text-[#7d867f] focus:border-mint"
        />
        {/* honeypot */}
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] size-0 opacity-0"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-mint inline-flex min-h-[58px] cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 text-[17px] font-bold disabled:opacity-70"
        >
          {status === "sending" ? "Joining…" : "Join the waitlist"}
          <Icon name="arrow" className="text-lg" />
        </button>
      </div>
      <p
        id="waitlist-msg"
        role={status === "error" ? "alert" : undefined}
        className={`mt-3 min-h-5 text-sm ${status === "error" ? "text-[#ff9db8]" : "text-[#b4bbb6]"}`}
      >
        {status === "error"
          ? message
          : "No commitment. No payment required."}
      </p>
    </form>
  );
}
