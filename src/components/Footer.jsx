export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-ink-line py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-semibold text-cream">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan to-sky grid place-items-center text-ink text-xs font-bold">
            C
          </span>
          CoconutWAY
        </div>
        <p className="font-mono text-xs text-cream/40 text-center">
          Proyecto independiente sobre Debian Sid · MATE · Picom + Compiz
        </p>
        <p className="font-mono text-xs text-cream/40">
          © {new Date().getFullYear()} CoconutWAY
        </p>
      </div>
    </footer>
  );
}
