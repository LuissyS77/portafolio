export function initTilt3d(): void {
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) scale(1.015)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "none";
    });
  });
}
