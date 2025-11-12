import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { cn } from "../components/ui/utils";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

function Contact() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<null | "ok" | "err">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(null);

    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setOk("ok");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
      <Header />
      <div className=" pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_0%,theme(colors.brand.500/.12),transparent_60%)]" />
      <div className="relative container mx-auto mt-10 px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Let’s talk about <span className="text-brand-500">solar growth</span>
        </h1>
        <p className="mt-3 text-white/70">
          Tell us a bit about your company. We’ll reply within 1 business day.
        </p>

        <div className="mt-10 grid md:grid-cols-5 gap-6">
          {/* Left: contact details */}
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-4">Contact info</h2>
            <ul className="space-y-3 text-sm text-white/80">
              <li><strong>Email:</strong> skyvoltsolar@gmail.com</li>
              <li><strong>Phone/WhatsApp:</strong> +60 18-291 5479</li>
              <li><strong>Location:</strong> Cheras, Kuala Lumpur</li>
            </ul>

            <a
              href="https://wa.me/60182915479"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Jane Tan" required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="ABC Solar" />
                </LabelInputContainer>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" placeholder="+60…" />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="budget">Monthly ad budget (optional)</Label>
                <Input id="budget" name="budget" placeholder="e.g., RM3,000" />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="message">What do you want to achieve?</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Leads, WhatsApp automation, quotes, booking…"
                  className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  required
                />
              </LabelInputContainer>

              <div className="flex items-start gap-2 text-xs text-white/70">
                <input id="consent" type="checkbox" className="mt-1" required />
                <label htmlFor="consent">
                  I agree to be contacted about my enquiry.
                </label>
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-brand-600 hover:bg-brand-700"
              >
                {sending ? "Sending…" : "Send message"}
              </Button>

              {ok === "ok" && (
                <p className="text-sm text-emerald-400">Thanks! We’ll be in touch shortly.</p>
              )}
              {ok === "err" && (
                <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

function LabelInputContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
}



export default Contact;