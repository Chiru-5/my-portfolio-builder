import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const interactiveSelector = "a, button, [role='button'], input, textarea, select, summary, .cursor-hover";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const ringX = useSpring(pointerX, { damping: 30, stiffness: 260, mass: 0.7 });
  const ringY = useSpring(pointerY, { damping: 30, stiffness: 260, mass: 0.7 });
  const dotX = useSpring(pointerX, { damping: 24, stiffness: 520, mass: 0.3 });
  const dotY = useSpring(pointerY, { damping: 24, stiffness: 520, mass: 0.3 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enabled = finePointer && !reducedMotion;

    setIsEnabled(enabled);

    if (!enabled) return;

    let frame = 0;
    let nextX = -100;
    let nextY = -100;

    const flushPosition = () => {
      pointerX.set(nextX);
      pointerY.set(nextY);
      frame = 0;
    };

    const handleMove = (event: PointerEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;
      setIsVisible(true);

      if (!frame) {
        frame = window.requestAnimationFrame(flushPosition);
      }
    };

    const updateHoverState = (target: EventTarget | null) => {
      const hovering = target instanceof Element && Boolean(target.closest(interactiveSelector));
      setIsHovering((current) => (current === hovering ? current : hovering));
    };

    const handlePointerOver = (event: Event) => updateHoverState(event.target);
    const handlePointerOut = (event: PointerEvent) => updateHoverState(event.relatedTarget);
    const handlePointerLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };
    const handleBlur = () => setIsVisible(false);
    const handleVisibility = () => setIsVisible(!document.hidden);

    document.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibility);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [pointerX, pointerY]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border border-foreground/30 bg-background/10 shadow-[var(--shadow-glow)] backdrop-blur-sm md:block"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          scale: isHovering ? 1.08 : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden rounded-full bg-primary md:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
        }}
        transition={{ type: "spring", stiffness: 520, damping: 28 }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
