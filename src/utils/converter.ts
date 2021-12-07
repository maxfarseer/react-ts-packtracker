export const toHTMLElement = (
  selectorOrHTMLElement: HTMLElement | string
): HTMLElement | null =>
  selectorOrHTMLElement instanceof HTMLElement
    ? selectorOrHTMLElement
    : document.querySelector(selectorOrHTMLElement);
