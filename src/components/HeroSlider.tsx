import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Affordable Smart Accessories",
    subtitle: "Oraimo, JBL, Anker & more — built for everyday Kenya.",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quality Gadgets at Kenyan Prices",
    subtitle: "Fast chargers, cables & power banks from KSh 450.",
    image:
      "https://images.unsplash.com/photo-1591290619762-aafc276a4473?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fast Delivery Across Kenya",
    subtitle: "Nairobi, Nakuru, Mombasa & beyond — pay on delivery.",
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Smart Watches for Every Lifestyle",
    subtitle: "Huawei, Vision Plus & Itel — track, train, thrive.",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const go = (d: number) => setI((v) => (v + d + slides.length) % slides.length);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card sm:aspect-[16/9]">
      {slides.map((s, idx) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Featured
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-4xl">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">{s.subtitle}</p>
          </div>
        </div>
      ))}

      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/70 backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/70 backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}