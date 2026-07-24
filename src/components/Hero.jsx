import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Download } from "lucide-react";
import SceneErrorBoundary from "./SceneErrorBoundary";

// El bundle de three.js + postprocessing es pesado: se carga aparte
// para no bloquear el primer render de la página.
const Scene3D = lazy(() => import("./Scene3D"));

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      {/* fondo 3D */}
      <div className="absolute inset-0">
        <SceneErrorBoundary
          fallback={<div className="absolute inset-0 bg-aurora bg-ink" />}
        >
          <Suspense
            fallback={<div className="absolute inset-0 bg-aurora bg-ink" />}
          >
            <Scene3D />
          </Suspense>
        </SceneErrorBoundary>
      </div>

      {/* velo para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/40 to-ink pointer-events-none" />
      <div className="absolute inset-0 bg-grid-fade pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-cyan/90 border border-cyan/30 rounded-full px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow" />
            CAPÍTULO 01 — BASADO EN DEBIAN SID
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-cream">
            El escritorio,
            <br />
            <span className="text-gradient">reinventado</span> a tu manera.
          </h1>

          <p className="mt-6 text-lg text-cream/70 max-w-lg leading-relaxed">
            CoconutWAY es un sistema operativo GNU/Linux construido sobre
            Debian Sid, con el escritorio MATE, composición visual vía Picom
            y Compiz, y un espíritu Frutiger Aero que le devuelve al
            escritorio su textura, su brillo y su personalidad.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#descarga"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("descarga")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-cyan text-ink font-semibold px-6 py-3.5 rounded-xl hover:bg-cyan-soft transition-colors"
            >
              <Download size={18} />
              Descargar ISO
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 glass text-cream px-6 py-3.5 rounded-xl hover:bg-cream/10 transition-colors"
            >
              <Code2 size={18} />
              Ver código fuente
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 font-mono text-xs text-cream/50">
            <div>
              <div className="text-cream text-xl font-display font-semibold">
                Sid
              </div>
              rolling release
            </div>
            <div className="w-px h-8 bg-cream/15" />
            <div>
              <div className="text-cream text-xl font-display font-semibold">
                MATE
              </div>
              escritorio clásico
            </div>
            <div className="w-px h-8 bg-cream/15" />
            <div>
              <div className="text-cream text-xl font-display font-semibold">
                Picom + Compiz
              </div>
              composición visual
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/40 font-mono text-[11px]"
      >
        arrastra el cubo · desplázate
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
