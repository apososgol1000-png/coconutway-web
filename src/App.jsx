import { useScroll, motion } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import System from "./components/System";
import Features from "./components/Features";
import Specs from "./components/Specs";
import DownloadSection from "./components/Download";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-ink text-cream font-body">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan to-sky origin-left z-[60]"
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <System />
        <Features />
        <Specs />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
