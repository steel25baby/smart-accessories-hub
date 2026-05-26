import { ShoppingCart } from "lucide-react";
import { type Product, formatKsh } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {product.category}
          </span>
          <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {product.brand}
          </span>
        </div>
        <h3 className="mt-1 line-clamp-1 font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">{formatKsh(product.price)}</span>
          <button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}