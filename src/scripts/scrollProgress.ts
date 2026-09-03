export function initScrollProgress(): void {
  const bar = document.querySelector<HTMLElement>("[data-progress]");
  if (!bar) return;

  const onScroll = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
