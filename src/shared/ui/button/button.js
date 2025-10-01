export function addClickHandler(buttonSelector, handler) {
  const button = document.querySelector(buttonSelector);

  if (!button) {
    console.warn(`Button with selector "${buttonSelector}" not found`);
    return;
  }

  button.addEventListener("click", handler);
}

export function addClickToAll(selector, handler) {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    console.warn(`No elements found with selector "${selector}"`);
    return;
  }

  elements.forEach((element) => {
    element.addEventListener("click", handler);
  });
}
