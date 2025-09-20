import React, { useRef, useMemo, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveAvatar({
  src,
  alt = "Profile",
  maxTranslate = 200,
  maxRotate = 10,
  hoverScale = 2,
  influenceRadius = 400,
}) {
  const wrapRef = useRef(null);
  const api = useMemo(() => ({}), []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    // QuickTo setters
    api.x   = gsap.quickTo(el, "x", { duration: 3, ease: "power3.out" });
    api.y   = gsap.quickTo(el, "y", { duration: 3, ease: "power3.out" });
    api.rot = gsap.quickTo(el, "rotation", { duration: 3, ease: "power3.out" });
    api.scl = gsap.quickTo(el, "scale", { duration: 3, ease: "power3.out" });

    const handleMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      const strength = 1 - Math.min(dist / influenceRadius, 1);
      const falloff = strength * strength;

      if (falloff > 0) {
        const nx = dx / (r.width / 2);
        const ny = dy / (r.height / 2);
        const clampedX = Math.max(-1, Math.min(1, nx));
        const clampedY = Math.max(-1, Math.min(1, ny));

        api.x(clampedX * maxTranslate * falloff);
        api.y(clampedY * maxTranslate * falloff);
        api.rot(clampedX * maxRotate * falloff);
        api.scl(hoverScale);
      } else {
        gsap.to(el, {
          x: 0, y: 0, rotation: 0, scale: 1,
          duration: 1.0, ease: "elastic.out(1, 0.5)",
        });
      }
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0, y: 0, rotation: 0, scale: 1,
        duration: 1.0, ease: "elastic.out(1, 0.5)",
      });
    };

    // 🔑 Attach mousemove ONLY when section has animated in
    ScrollTrigger.create({
      trigger: el,
      start: "top 75%",
      onEnter: () => {
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseleave", handleLeave);
      },
      onLeaveBack: () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseleave", handleLeave);
        // reset state when scrolling away
        gsap.set(el, { x: 0, y: 0, rotation: 0, scale: 1 });
      },
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [maxTranslate, maxRotate, hoverScale, influenceRadius]);

  return (
    <div
      ref={wrapRef}
      className="img 3inline-block rounded-3xl shadow-2xl will-change-transform select-none z-10"
      style={{ transformOrigin: "center" }}
    >
      <img
        src={src}
        alt={alt}
        className="avatar pointer-events-none select-none"
        draggable="false"
      />
    </div>
  );
}
