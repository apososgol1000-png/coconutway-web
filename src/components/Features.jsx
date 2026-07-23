import { motion } from "framer-motion";
import {
  Wind,
  PaintBucket,
  Gauge,
  GitBranch,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const STACK = [
  "apt",
  "Xorg",
  "Picom",
  "Compiz",
  "MATE",
  "live-build",
  "systemd",
  "Flatpak",
  "GTK3",
  "Plymouth",
];

const FEATURES = [
  {
    icon: Wind,
    title: "Efectos sin fricción",
    desc: "Blur, sombras suaves y transparencias reales gracias a Picom, calibrados para no robarle fluidez al sistema.",
  },
  {
    icon: PaintBucket,
    title: "Wallpapers y temas Aero",
    desc: "Fondos de cielo, gradientes cian y superficies de cristal integrados desde el primer arranque.",
  },
  {
    icon: Gauge,
    title: "Ligero de verdad",
    desc: "MATE mantiene el consumo de RAM bajo control, incluso en equipos con 3–4 GB, sin renunciar a los efectos.",
  },
  {
    icon: GitBranch,
    title: "Rolling release",
    desc: "Corre sobre Debian Sid: recibes actualizaciones de paquetes y del kernel de forma continua.",
  },
  {
    icon: MonitorSmartphone,
    title: "El cubo de Compiz vive",
    desc: "Activa el cambio de escritorios en cubo 3D clásico, arrastrable con mouse o gestos de touchpad.",
  },
  {
    icon: ShieldCheck,
    title: "Reproducible con live-build",
    desc: "La ISO se construye con hooks documentados y auditables — nada de configuraciones ocultas.",
  },
];

export default function Features() {
  return (
    <section id="caracteristicas" className="relative py-28 md:py-36 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <span className="font-mono text-xs text-cyan/90 border border-cyan/30 rounded-full px-3 py-1.5">
            CAPÍTULO 04
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-5 text-cream leading-tight">
            Hecho para <span className="text-gradient">sentirse</span>, no
            solo para funcionar
          </h2>
        </div>
      </div>

      {/* marquee del stack técnico */}
      <div className="relative mt-14 py-5 border-y border-ink-line overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 font-mono text-sm text-cream/40">
          {[...STACK, ...STACK].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s}
              <span className="text-cyan/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl p-6 border border-ink-line hover:border-cyan/40 hover:bg-cream/[0.03] transition-colors"
            >
              <Icon className="text-cyan" size={20} />
              <h3 className="font-display font-semibold text-base mt-4 text-cream">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-cream/60 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
