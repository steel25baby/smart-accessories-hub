import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { products, formatKsh } from "@/data/products";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchStore } from "@/store/search";

export function SearchBar() {
  const isOpen = useSearchStore((s) => s.isOpen);
  const setOpen = useSearchStore((s) => s.setOpen);
  const setQuery = useSearchStore((s) => s.setQuery);
  const [input, setInput] = useState("");
  const debounced = useDebounce(input, 300);

  useEffect(() => {
    setQuery(debounced);
  }, [debounced, setQuery]);

  useEffect(() => {
    if (!isOpen) setInput("");
  }, [isOpen]);

  const results = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [debounced]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-background/70 px-4 pt-20 backdrop-blur"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search products, brands, categories…"
            className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close search"
            className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {debounced.trim() === "" ? (
            <p className="px-4 py-6 text-center text-sm text-muted-foreground">
              Start typing to search…
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-muted-foreground">
              No products match "{debounced}".
            </p>
          ) : (
            <ul>
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/shop"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 border-b border-border/60 px-4 py-3 transition-colors hover:bg-secondary"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-12 w-12 rounded-md object-cover"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {p.brand} · {p.category}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {formatKsh(p.price)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}