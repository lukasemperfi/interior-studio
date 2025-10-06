export const initTabs = (selector, onChange) => {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  const buttons = element.querySelectorAll("[data-tab-target]");

  buttons.forEach((button) => {
    button.addEventListener("click", () =>
      handleTabClick(buttons, button, onChange)
    );
  });
};

const handleTabClick = (buttons, clickedButton, onChange) => {
  buttons.forEach((button) => {
    button.classList.remove("tabs__button_active");
    button.setAttribute("aria-selected", "false");
  });

  clickedButton.classList.add("tabs__button_active");
  clickedButton.setAttribute("aria-selected", "true");

  if (onChange) {
    onChange(clickedButton.dataset.tabTarget);
  }
};
