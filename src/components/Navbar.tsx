import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu, X, Zap, Search, LogOut, User as UserIcon } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useSearchStore } from "@/store/search";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuthStore } from "@/store/auth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const count = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
  const openCart = useCartStore((s) => s.setOpen);
  const openSearch = useSearchStore((s) => s.setOpen);
  const user = useAuthStore((s) => s.user);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Zap className="h-4 w-4" />
          </span>
          <span>
            Smart On <span className="text-primary">Accessories</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            onClick={() => openSearch(true)}
            className="grid h-10 w-10 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary"
          >
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          {user ? (
            <button
              aria-label="Sign out"
              onClick={handleSignOut}
              className="hidden h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:inline-flex"
              title={user.email ?? "Account"}
            >
              <UserIcon className="h-4 w-4" />
              <LogOut className="h-4 w-4" />
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden h-10 items-center rounded-md px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:inline-flex"
            >
              Sign in
            </Link>
          )}
          <button
            aria-label="Cart"
            onClick={() => openCart(true)}
            className="relative grid h-10 w-10 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              {count}
            </span>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            {user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  handleSignOut();
                }}
                className="rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                Sign out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}