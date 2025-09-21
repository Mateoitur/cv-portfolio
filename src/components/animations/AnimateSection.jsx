import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate a section with GSAP and ScrollTrigger.
 */
export function animateSection(root, config = {}) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 50%",
      toggleActions: "restart reset restart reset",
      ...config.trigger,
    },
    defaults: { ease: "back", ...config.defaults },
  });

  // --- text ---
  if (config.text) {
    gsap.set(root.querySelectorAll(".text"), { autoAlpha: 0, y: 30 });
    tl.to(
      root.querySelectorAll(".text"),
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        delay: 0.2,
      },
      config.textPosition || 0
    );
  }

  // --- img ---
  if (config.img) {
    gsap.set(root.querySelectorAll(".img"), { autoAlpha: 0, scale: 0 });
    tl.to(
      root.querySelectorAll(".img"),
      {
        autoAlpha: 1,
        scale: 1,
      },
      config.imgPosition || "<"
    );
  }

  // --- text2 ---
  if (config.text2) {
    gsap.set(root.querySelectorAll(".text2"), { autoAlpha: 0 });
    tl.to(
      root.querySelectorAll(".text2"),
      {
        autoAlpha: 1,
        duration: 2,
        delay: 0.2,
      },
      config.text2Position || "<"
    );
  }

  // --- gallery (row-by-row) ---
  if (config.gallery) {
    const rows = root.querySelectorAll(".gallery-row");
  
    rows.forEach((row) => {
      const imgs = row.querySelectorAll("img");
      const hidden = { autoAlpha: 0, y: 30 };
      gsap.set(imgs, hidden);
  
      const play = () =>
        gsap.fromTo(
          imgs,
          hidden,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: true,
          }
        );
  
      const reset = () => gsap.set(imgs, hidden);
  
      // 1) Play when the row enters (down or up)
      gsap.to({}, {
        scrollTrigger: {
          trigger: row,
          start: "top 85%",   // start reveal a bit before fully in view
          onEnter: play,
          onEnterBack: play,
        },
      });
  
      // 2) Reset ONLY when fully outside the viewport
      gsap.to({}, {
        scrollTrigger: {
          trigger: row,
          start: "top bottom",   // row completely below viewport
          end: "bottom top",     // row completely above viewport
          onLeave: reset,        // scrolled past end (fully out above)
          onLeaveBack: reset,    // scrolled past start in reverse (fully out below)
        },
      });
    });
  }

  return tl;
}
