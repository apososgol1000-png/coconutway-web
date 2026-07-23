import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const CHAPTERS = [
  { id: "inicio", num: "01", label: "Inicio" },
  { id: "quienes-somos", num: "02", label: "Quiénes somos" },
  { id: "sistema", num: "03", label: "El sistema" },
  { id: "caracteristicas", num: "04", label: "Características" },
  { id: "especificaciones", num: "05", label: "Especificaciones" },
  { id: "descarga", num: "06", label: "Descarga" },
];

export default function Nav() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/20 py-2.5 px-6" : "px-5"
        }`}
      >
        <button
          onClick={() => go("inicio")}
          className="flex items-center gap-2 font-display font-semibold text-cream tracking-tight"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-sky grid place-items-center text-ink text-sm font-bold">
            C
          </span>
          CoconutWAY
        </button>

        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
          {CHAPTERS.map((c) => (
            <button
              key={c.id}
              onClick={() => go(c.id)}
              className={`px-3 py-2 rounded-lg transition-colors ${
                active === c.id
                  ? "text-cyan bg-cream/5"
                  : "text-cream/50 hover:text-cream"
              }`}
            >
              <span className="opacity-60 mr-1.5">{c.num}</span>
              {c.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => go("descarga")}
            className="font-mono text-xs px-4 py-2 rounded-lg bg-cyan text-ink font-semibold hover:bg-cyan-soft transition-colors"
          >
            Descargar ISO
          </button>
        </div>

        <button
          className="lg:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-2 glass rounded-2xl p-3 flex flex-col gap-1 font-mono text-sm">
          {CHAPTERS.map((c) => (
            <button
              key={c.id}
              onClick={() => go(c.id)}
              className={`text-left px-3 py-2.5 rounded-lg ${
                active === c.id ? "text-cyan bg-cream/5" : "text-cream/70"
              }`}
            >
              <span className="opacity-60 mr-2">{c.num}</span>
              {c.label}
            </button>
          ))}
          <button
            onClick={() => go("descarga")}
            className="mt-1 px-3 py-2.5 rounded-lg bg-cyan text-ink font-semibold text-center"
          >
            Descargar ISO
          </button>
        </div>
      )}
    </header>
  );
}
