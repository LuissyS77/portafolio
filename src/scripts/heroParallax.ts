export function initHeroParallax(): void {
  if (!window.matchMedia("(pointer:fine)").matches) return;

  const layers = document.querySelectorAll<HTMLElement>("#top [data-parallax]");
  if (!layers.length) return;

  window.addEventListener(
    "mousemove",
    (e) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      layers.forEach((layer, i) => {
        const k = (i + 1) * 7;
        layer.style.marginLeft = -px * k + "px";
        layer.style.marginTop = -py * k + "px";
      });
    },
    { passive: true }
  );
}
