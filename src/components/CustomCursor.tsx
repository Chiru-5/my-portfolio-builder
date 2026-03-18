import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const interactiveSelector = "a, button, [role='button'], input, textarea, select, summary, .cursor-hover";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const x = useSpring(cursorX, { damping: 28, stiffness: 420, mass: 0.35 });
  const y = useSpring(cursorY, { damping: 28, stiffness: 420, mass: 0.35 });

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
      cursorX.set(nextX);
      cursorY.set(nextY);
      frame = 0;
    };

    const handleMove = (event: PointerEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;
      setIsVisible((current) => current || true);

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
    const handleBlur = () => setIsVisible(false);
    const handleVisibility = () => setIsVisible(!document.hidden);

    document.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibility);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [cursorX, cursorY]);

  if (!isEnabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x, y, translateX: "-16%", translateY: "-8%" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1.1 : 1,
        rotate: isHovering ? -8 : 0,
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      aria-hidden="true"
    >
      <div className="relative">
        <svg
          viewBox="0 0 28 28"
          className="h-7 w-7 drop-shadow-[0_0_18px_hsl(var(--primary)/0.32)]"
          fill="none"
        >
          <path
            d="M4 3.5v18l5.6-5.2 4.1 8.2 3.1-1.6-4.2-8.1 7.9-.3L4 3.5Z"
            fill="hsl(var(--foreground))"
            stroke="hsl(var(--background))"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute left-[8px] top-[9px] h-2.5 w-2.5 rounded-full bg-primary/80 shadow-[var(--shadow-glow)]" />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
