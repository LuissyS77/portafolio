import { heroWords } from "../data/site";

export function initTypewriter(): void {
  const el = document.querySelector<HTMLElement>("[data-rotating]");
  if (!el || heroWords.length === 0) return;

  let word = 0;
  let i = heroWords[0].length;
  let dir = -1;

  setInterval(() => {
    i += dir;
    if (i <= 0) {
      dir = 1;
      word = (word + 1) % heroWords.length;
      i = 0;
    } else if (i >= heroWords[word].length) {
      dir = -1;
      i = heroWords[word].length;
    }
    el.textContent = heroWords[word].slice(0, i) || " ";
  }, 62);
}
