import { useRef } from "react";

/**
 * Hook de inclinación 3D al pasar el mouse (tilt on hover).
 * Devuelve un ref para poner en el elemento y los handlers de mouse.
 * Uso: const { ref, onMouseMove, onMouseLeave } = useTilt();
 */
export function useTilt(strength = 10) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -strength;
    const rotateY = ((x - centerX) / centerX) * strength;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
