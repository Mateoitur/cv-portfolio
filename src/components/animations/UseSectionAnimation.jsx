import { useGSAP } from "@gsap/react";
import { animateSection } from "./AnimateSection";

export function useSectionAnimation(ref, config) {
  useGSAP(() => {
    if (ref.current) {
      animateSection(ref.current, config);
    }
  }, { scope: ref });
}
