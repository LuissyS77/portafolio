export function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!elements.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.style.transition = "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        io.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  elements.forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 70 + "ms";
    io.observe(el);
  });
}
