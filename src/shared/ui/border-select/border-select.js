export const initSelect = (selectClass) => {
  const select = document.querySelector(selectClass);
  const button = select.querySelector(".border-select__button");
  const selectedText = select.querySelector(".border-select__selected");
  const options = select.querySelectorAll(".border-select__option");
  const hiddenInput = select.querySelector('input[type="hidden"]');

  const closeDropdown = () => {
    button.setAttribute("aria-expanded", "false");
  };

  const toggleDropdown = () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
  };

  const selectOption = (option) => {
    options.forEach((opt) => opt.removeAttribute("aria-selected"));

    option.setAttribute("aria-selected", "true");
    selectedText.textContent = option.textContent.trim();
    hiddenInput.value = option.dataset.value;

    closeDropdown();

    const event = new Event("change", { bubbles: true });
    hiddenInput.dispatchEvent(event);
  };

  button.addEventListener("click", toggleDropdown);

  options.forEach((option) => {
    option.addEventListener("click", () => selectOption(option));
  });

  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      closeDropdown();
    }
  });

  return {
    closeDropdown,
    toggleDropdown,
    selectOption,
  };
};
