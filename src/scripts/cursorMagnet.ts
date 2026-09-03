import { CUSTOM_CURSOR_ENABLED } from "../data/site";

export function initCursorMagnet(): void {
  if (!CUSTOM_CURSOR_ENABLED || !window.matchMedia("(pointer:fine)").matches) return;

  const cursor = document.querySelector<HTMLElement>("[data-cursor]");
  if (!cursor) return;

  let x = 0;
  let y = 0;
  let cx = 0;
  let cy = 0;

  window.addEventListener(
    "mousemove",
    (e) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.opacity = "1";
    },
    { passive: true }
  );

  const loop = () => {
    cx += (x - cx) * 0.18;
    cy += (y - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(loop);
  };
  loop();

  document.querySelectorAll<HTMLElement>("[data-magnet]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "72px";
      cursor.style.height = "72px";
      cursor.style.margin = "-36px 0 0 -36px";
      cursor.style.background = "rgba(232,228,218,.12)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.width = "38px";
      cursor.style.height = "38px";
      cursor.style.margin = "-19px 0 0 -19px";
      cursor.style.background = "transparent";
    });
  });
}
