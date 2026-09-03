export function initClock(): void {
  const el = document.querySelector<HTMLElement>("[data-clock]");
  if (!el) return;

  const tick = () => {
    el.textContent = new Date().toLocaleTimeString("es-CO", {
      timeZone: "America/Bogota",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  tick();
  setInterval(tick, 30000);
}
