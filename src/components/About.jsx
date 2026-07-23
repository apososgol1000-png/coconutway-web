import { motion } from "framer-motion";
import { Sparkles, Heart, Terminal } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="quienes-somos"
      className="relative py-28 md:py-36 bg-ink overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-sky/10 blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-husk/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="lg:col-span-2"
        >
          <span className="font-mono text-xs text-cyan/90 border border-cyan/30 rounded-full px-3 py-1.5">
            CAPÍTULO 02
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-5 leading-tight text-cream">
            ¿Quiénes <span className="text-gradient">somos?</span>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            CoconutWAY nace como un proyecto independiente, hecho por y para
            la comunidad Linux. No somos una corporación: somos gente que
            extraña el brillo, la transparencia y el buen humor del
            escritorio de los 2000, y que no está dispuesta a cambiarlo por
            un rendimiento moderno.
          </p>
          <p className="mt-4 text-cream/70 leading-relaxed">
            Tomamos la base más actualizada de Debian, el escritorio más
            honesto que existe (MATE) y le devolvimos su alma visual con
            Picom y Compiz. El resultado es un sistema rápido, estable en su
            núcleo y absolutamente vivo en su interfaz.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-3 grid sm:grid-cols-2 gap-5"
        >
          <div className="glass rounded-2xl p-6">
            <Heart className="text-husk-soft" size={22} />
            <h3 className="font-display font-semibold text-lg mt-4 text-cream">
              Filosofía
            </h3>
            <p className="mt-2 text-sm text-cream/60 leading-relaxed">
              Creemos que un sistema operativo puede ser técnico y a la vez
              cálido. La eficiencia no está peleada con la belleza.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <Terminal className="text-cyan" size={22} />
            <h3 className="font-display font-semibold text-lg mt-4 text-cream">
              100% código abierto
            </h3>
            <p className="mt-2 text-sm text-cream/60 leading-relaxed">
              Cada hook de live-build, cada ajuste de Compiz y cada wallpaper
              está disponible para que la comunidad lo audite y lo mejore.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <Sparkles className="text-sky" size={22} />
            <h3 className="font-display font-semibold text-lg mt-4 text-cream">
              Frutiger Aero, en serio
            </h3>
            <p className="mt-2 text-sm text-cream/60 leading-relaxed">
              Glassmorphism, gradientes de cielo y formas orgánicas — no como
              nostalgia vacía, sino como una identidad visual completa.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 flex flex-col justify-center">
            <p className="font-mono text-xs text-cream/50">$ uname -a</p>
            <p className="font-mono text-sm text-cyan mt-2">
              CoconutWAY GNU/Linux · sid · MATE
            </p>
            <p className="font-mono text-xs text-cream/50 mt-3">
              compositor: picom + compiz
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
