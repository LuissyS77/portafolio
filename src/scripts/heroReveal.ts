export function initHeroReveal(): void {
  document.querySelectorAll<HTMLElement>("[data-rise]").forEach((el, i) => {
    setTimeout(() => {
      el.style.transform = "translateY(0)";
    }, 120 + i * 130);
  });
}
