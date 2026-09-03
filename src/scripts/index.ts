import { initClock } from "./clock";
import { initTypewriter } from "./typewriter";
import { initParticles } from "./particles";
import { initHeroParallax } from "./heroParallax";
import { initHeroReveal } from "./heroReveal";
import { initScrollReveal } from "./scrollReveal";
import { initScrollProgress } from "./scrollProgress";
import { initCursorMagnet } from "./cursorMagnet";
import { initTilt3d } from "./tilt3d";

export function initAll(): void {
  initClock();
  initTypewriter();
  initParticles();
  initHeroParallax();
  initHeroReveal();
  initScrollReveal();
  initScrollProgress();
  initCursorMagnet();
  initTilt3d();
}
