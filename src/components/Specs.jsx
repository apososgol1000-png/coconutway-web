import { motion } from "framer-motion";

const ROWS = [
  { label: "Procesador", min: "Dual-core x86_64", rec: "Quad-core x86_64" },
  { label: "Memoria RAM", min: "2 GB", rec: "4 GB o más" },
  { label: "Almacenamiento", min: "15 GB libres", rec: "25 GB (SSD)" },
  { label: "GPU", min: "Compatible con Xorg", rec: "Aceleración 3D para Compiz" },
  { label: "Arranque", min: "BIOS / UEFI", rec: "UEFI" },
];

export default function Specs() {
  return (
    <section
      id="especificaciones"
      className="relative py-28 md:py-36 bg-ink-soft"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <span className="font-mono text-xs text-cyan/90 border border-cyan/30 rounded-full px-3 py-1.5">
            CAPÍTULO 05
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-5 text-cream leading-tight">
            Requisitos <span className="text-gradient">técnicos</span>
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed">
            CoconutWAY corre cómodo con Picom activo desde 2 GB de RAM. Si
            quieres el cubo de Compiz con toda su gloria, 4 GB es el punto
            dulce.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-3 font-mono text-xs uppercase tracking-wider text-cream/50 px-6 sm:px-8 py-4 border-b border-cream/10">
            <span>Componente</span>
            <span className="text-cream/70">Mínimo</span>
            <span className="text-cyan">Recomendado</span>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-3 px-6 sm:px-8 py-4 text-sm sm:text-base ${
                i !== ROWS.length - 1 ? "border-b border-cream/5" : ""
              }`}
            >
              <span className="text-cream font-medium">{r.label}</span>
              <span className="text-cream/60">{r.min}</span>
              <span className="text-cyan/90">{r.rec}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
