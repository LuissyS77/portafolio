export function initParticles(): void {
  const stars = document.querySelector<HTMLElement>("[data-stars]");
  if (!stars || stars.childElementCount) return;

  for (let i = 0; i < 26; i++) {
    const d = document.createElement("span");
    const size = 1 + Math.random() * 2;
    d.style.cssText =
      "position:absolute;border-radius:50%;background:#e8e4da;width:" +
      size +
      "px;height:" +
      size +
      "px;left:" +
      (Math.random() * 100).toFixed(2) +
      "%;top:" +
      (Math.random() * 100).toFixed(2) +
      "%;animation:twinkle " +
      (3 + Math.random() * 5).toFixed(1) +
      "s ease-in-out " +
      (Math.random() * 4).toFixed(1) +
      "s infinite";
    stars.appendChild(d);
  }
}
