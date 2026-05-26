import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          We'd love to hear from you. Reach out for support, partnerships or feedback.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <aside className="space-y-4 lg:col-span-1">
          {[
            { Icon: Phone, title: "Phone", text: "+1 (555) 123-4567" },
            { Icon: Mail, title: "Email", text: "hello@smarton.com" },
            { Icon: MapPin, title: "Location", text: "San Francisco, CA" },
          ].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </aside>

        <form
          onSubmit={onSubmit}
          className="space-y-5 rounded-2xl border border-border bg-card p-8 lg:col-span-2"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-foreground">Name</label>
              <input
                required
                type="text"
                placeholder="Your name"
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Message</label>
            <textarea
              required
              rows={6}
              placeholder="How can we help?"
              className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            {sent ? (
              <p className="text-sm font-medium text-primary">
                ✓ Message sent — we'll be in touch soon!
              </p>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/40"
            >
              Send <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}