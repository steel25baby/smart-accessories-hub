import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Wallet, Smartphone } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Now delivering across Kenya
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Smart On <span className="text-primary">Accessories</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Affordable smart accessories from Oraimo, JBL, Anker, Samsung, Xiaomi and more —
              quality gadgets at honest Kenyan prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/40"
              >
                Order Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Learn more
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span>✓ Pay on Delivery</span>
              <span>✓ M-Pesa Coming Soon</span>
              <span>✓ Genuine Products</span>
            </div>
          </div>
          <HeroSlider />
        </div>
      </section>

      {/* Feature strip */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
          {[
            {
              Icon: Truck,
              title: "Countrywide Delivery",
              text: "Nairobi, Nakuru, Mombasa & beyond",
            },
            {
              Icon: Wallet,
              title: "Pay on Delivery",
              text: "M-Pesa support coming soon",
            },
            {
              Icon: Smartphone,
              title: "Genuine Brands",
              text: "Oraimo, JBL, Anker, Samsung & more",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-muted-foreground">Top picks from our latest drop.</p>
          </div>
          <Link
            to="/shop"
            className="hidden text-sm font-medium text-primary hover:underline sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Brand strip */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted brands we stock
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
          {[
            "Oraimo",
            "Itel",
            "Samsung",
            "Xiaomi",
            "JBL",
            "Infinix",
            "Tecno",
            "Huawei",
            "Anker",
            "Vision Plus",
          ].map((b) => (
            <span key={b} className="transition-colors hover:text-primary">
              {b}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
