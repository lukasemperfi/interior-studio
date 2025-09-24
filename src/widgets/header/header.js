export function initHeader() {
  initMenuButton();
  initHeaderScroll();
}

function initMenuButton() {
  const menuButton = document.querySelector(".header__menu-button");
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");
  const menuButtonText = document.querySelector(".menu-button__text");
  if (!menuButton) {
    return;
  }

  menuButton.addEventListener("click", function () {
    const isOpen = hamburger.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    header.classList.toggle("is-open");
    menuButtonText.classList.toggle("is-open");
  });
}

function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) {
    return;
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 1) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  });
}
