"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sent"; text?: string };

// The site is static, so there is no server to send mail. The form fills in an email
// in the visitor's own mail app instead.
export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = `${message}\n\n${name}\n${from}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ kind: "sent", text: `Your email app should open with the message filled in. If it doesn't, write to ${email}.` });
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row">
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required maxLength={100} />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
      </div>
      <label className="field">
        <span>Subject</span>
        <input name="subject" type="text" required maxLength={150} />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={6} required maxLength={1500} />
      </label>
      <div className="form__foot">
        <button className="btn btn--red" type="submit">
          Open in my email app
          <span className="btn__arrow" aria-hidden="true">→</span>
        </button>
        <p className={`form__status form__status--${status.kind}`} role="status" aria-live="polite">
          {status.text}
        </p>
      </div>
    </form>
  );
}
