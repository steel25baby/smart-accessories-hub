import { createFileRoute } from "@tanstack/react-router";
import { Target, Sparkles, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          About Us
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Smart tech for a <span className="text-primary">smarter</span> life
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Smart On Accessories is a Kenyan online gadget shop bringing you genuine phone
          accessories from Oraimo, JBL, Anker, Samsung, Xiaomi and more — at prices that make
          sense.
        </p>
      </header>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <Target className="h-8 w-8 text-primary" />
          <h2 className="mt-4 text-xl font-semibold text-foreground">Our Mission</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            To make quality smart accessories affordable and accessible to every Kenyan — from
            Nairobi to Mombasa, Kisumu to Eldoret.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <Sparkles className="h-8 w-8 text-primary" />
          <h2 className="mt-4 text-xl font-semibold text-foreground">Our Vision</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            To be Kenya's most trusted online destination for smart, dependable tech
            accessories — backed by friendly local service.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-6 rounded-2xl border border-border bg-card p-8 sm:grid-cols-3">
        {[
          { Icon: Heart, title: "Quality First", text: "Tested for daily life." },
          { Icon: Users, title: "Customer Focused", text: "Real support, real people." },
          { Icon: Sparkles, title: "Modern Design", text: "Crafted to stand out." },
        ].map(({ Icon, title, text }) => (
          <div key={title} className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}