import { motion } from "framer-motion";
import { Boxes, LayoutPanelLeft, Layers3 } from "lucide-react";
import { useTilt } from "../hooks/useTilt";

const PILLARS = [
  {
    icon: Boxes,
    tag: "base",
    title: "Debian Sid",
    accent: "text-cyan",
    ring: "hover:shadow-cyan/20",
    desc: "La rama inestable de Debian, elegida por algo: paquetes al día, kernels recientes y acceso inmediato al software más nuevo del ecosistema libre. Rolling release real, sin esperar al próximo lanzamiento.",
    bullets: [
      "Actualizaciones continuas vía apt",
      "Compatibilidad total con el repositorio Debian",
      "Base sólida para hardware moderno",
    ],
  },
  {
    icon: LayoutPanelLeft,
    tag: "escritorio",
    title: "MATE",
    accent: "text-sky",
    ring: "hover:shadow-sky/20",
    desc: "La continuación fiel de GNOME 2: paneles configurables, un centro de control claro y cero curva de aprendizaje. Ligero de recursos, honesto en su comportamiento.",
    bullets: [
      "Bajo consumo de RAM y CPU",
      "Paneles y applets totalmente personalizables",
      "Ideal para equipos modestos",
    ],
  },
  {
    icon: Layers3,
    tag: "composición",
    title: "Picom + Compiz",
    accent: "text-husk-soft",
    ring: "hover:shadow-husk/20",
    desc: "Picom aporta transparencias, sombras y desenfoque sin sacrificar estabilidad. Compiz, activado como capa opcional, trae de vuelta el cubo de escritorios, ventanas 'wobbly' y efectos que hicieron historia.",
    bullets: [
      "Blur y transparencias reales en cada ventana",
      "Cubo de escritorios estilo Compiz clásico",
      "Activable/desactivable según tu hardware",
    ],
  },
];

function PillarCard({ pillar, index }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8);
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "transform 0.15s ease-out" }}
      className={`glass rounded-3xl p-8 will-change-transform hover:shadow-2xl ${pillar.ring}`}
    >
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-xl bg-cream/5 grid place-items-center">
          <Icon className={pillar.accent} size={22} />
        </div>
        <span className="font-mono text-[11px] text-cream/40 uppercase tracking-wider">
          {pillar.tag}
        </span>
      </div>

      <h3 className="font-display text-2xl font-semibold mt-6 text-cream">
        {pillar.title}
      </h3>
      <p className="mt-3 text-sm text-cream/65 leading-relaxed">
        {pillar.desc}
      </p>

      <ul className="mt-6 space-y-2.5">
        {pillar.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-sm text-cream/70"
          >
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full ${pillar.accent} bg-current shrink-0`}
            />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function System() {
  return (
    <section id="sistema" className="relative py-28 md:py-36 bg-ink-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <span className="font-mono text-xs text-cyan/90 border border-cyan/30 rounded-full px-3 py-1.5">
            CAPÍTULO 03
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-5 text-cream leading-tight">
            Tres capas, <span className="text-gradient">una identidad</span>
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed">
            Cada pieza de CoconutWAY se eligió a propósito. Nada es genérico:
            así se construye el sistema, de la base al cristal.
          </p>
        </div>

        <div className="perspective-1000 mt-14 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
