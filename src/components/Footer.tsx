import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-4 w-4" />
            </span>
            Smart On
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Affordable smart accessories delivered across Kenya. Pay on delivery available.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/shop" className="hover:text-primary">Shop</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Earbuds &amp; Headphones</li>
            <li>Chargers</li>
            <li>Power Banks</li>
            <li>Covers</li>
            <li>Smart Watches</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>hello@smartonke.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {year} Smart On Accessories Kenya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}