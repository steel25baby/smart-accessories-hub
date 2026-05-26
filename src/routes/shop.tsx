import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Truck } from "lucide-react";

export const Route = createFileRoute("/shop")({
  component: Shop,
});

function Shop() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Shop the <span className="text-primary">Collection</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Genuine smart accessories at honest Kenyan prices.
        </p>
      </header>

      <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-center text-sm text-foreground">
        <Truck className="h-4 w-4 flex-shrink-0 text-primary" />
        <p>
          Delivery available in <strong>Nairobi, Nakuru, Mombasa &amp; beyond</strong> · Pay on
          Delivery · M-Pesa coming soon
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === c
                ? "bg-primary text-primary-foreground shadow shadow-primary/30"
                : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No products in this category.</p>
      )}
    </div>
  );
}