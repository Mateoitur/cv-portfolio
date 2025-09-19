import gsap from "gsap";

/**
 * Animate a section with GSAP and ScrollTrigger.
 * Ensures elements are preset hidden, animate in,
 * and reset (hidden) when leaving viewport.
 */
export function animateSection(root, config = {}) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 50%",
      toggleActions: "restart reset restart reset", // reset on leave
      ...config.trigger,
    },
    defaults: { ease: "back", ...config.defaults },
  });

  // Preset hidden states so no flash on load
  if (config.text) {
    gsap.set(root.querySelectorAll(".text"), { autoAlpha: 0, y: 30 });
    tl.to(root.querySelectorAll(".text"), {
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
      delay: 0.2,
    }, config.textPosition || 0);
  }

  if (config.img) {
    gsap.set(root.querySelectorAll(".img"), { autoAlpha: 0, scale: 0 });
    tl.to(root.querySelectorAll(".img"), {
      autoAlpha: 1,
      scale: 1,
    }, config.imgPosition || "<");
  }

  if (config.text2) {
    gsap.set(root.querySelectorAll(".text2"), { autoAlpha: 0 });
    tl.to(root.querySelectorAll(".text2"), {
      autoAlpha: 1,
      duration: 2,
      delay: 0.2,

    }, config.text2Position || "<");
  }

  return tl;
}
