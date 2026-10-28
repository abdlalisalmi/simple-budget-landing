import { NextResponse } from "next/server";

// Adds the email to a Resend audience. Keys come from the environment only:
//   RESEND_API_KEY      — Resend API key
//   RESEND_AUDIENCE_ID  — the audience that holds the waitlist
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let email = "";
  let website = "";
  try {
    const body = await request.json();
    email = String(body.email ?? "").trim().toLowerCase();
    website = String(body.website ?? "");
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend it worked.
  if (website) return NextResponse.json({ ok: true });

  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    console.error("Waitlist: RESEND_API_KEY or RESEND_AUDIENCE_ID is not set");
    return NextResponse.json(
      { error: "The waitlist is unavailable right now. Please try again later." },
      { status: 503 },
    );
  }

  const res = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    },
  );

  if (!res.ok) {
    console.error("Waitlist: Resend responded", res.status, await res.text());
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
