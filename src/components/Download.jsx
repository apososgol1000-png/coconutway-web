import { motion } from "framer-motion";
import { Download, Code2, MessageCircle } from "lucide-react";
import CubeMini from "./CubeMini";

export default function DownloadSection() {
  return (
    <section
      id="descarga"
      className="relative py-28 md:py-36 bg-ink overflow-hidden"
    >
      <div className="absolute inset-0 bg-aurora opacity-70 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-xs text-cyan/90 border border-cyan/30 rounded-full px-3 py-1.5">
          CAPÍTULO 06
        </span>

        <div className="flex justify-center my-8">
          <CubeMini />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight"
        >
          Prueba <span className="text-gradient">CoconutWAY</span> hoy
        </motion.h2>
        <p className="mt-5 text-cream/70 max-w-lg mx-auto leading-relaxed">
          Descarga la ISO, escríbela en un USB y arranca. Sin cuentas, sin
          telemetría, sin letras chiquitas.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-cyan text-ink font-semibold px-7 py-4 rounded-xl hover:bg-cyan-soft transition-colors"
          >
            <Download size={18} />
            Descargar ISO (amd64)
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 glass text-cream px-7 py-4 rounded-xl hover:bg-cream/10 transition-colors"
          >
            <Code2 size={18} />
            Código fuente
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 glass text-cream px-7 py-4 rounded-xl hover:bg-cream/10 transition-colors"
          >
            <MessageCircle size={18} />
            Comunidad
          </a>
        </div>

        <p className="mt-8 font-mono text-xs text-cream/40">
          sha256sum disponible junto a cada release · construido con
          live-build
        </p>
      </div>
    </section>
  );
}
