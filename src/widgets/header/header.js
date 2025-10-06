export function initHeader() {
  initMenuButton();
  initHeaderScroll();
}

function initMenuButton() {
  const menuButton = document.querySelector(".header__menu-button");
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");
  const menuButtonText = document.querySelector(".menu-button__text");
  const navMenuMobile = document.querySelector(".nav-menu-mobile");

  if (!menuButton) {
    return;
  }

  menuButton.addEventListener("click", function () {
    const isOpen = hamburger.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    header.classList.toggle("is-open");
    menuButtonText.classList.toggle("is-open");
    navMenuMobile.classList.toggle("is-open");
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  });
}

function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) {
    return;
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 1) {
      header.classList.add("header_scrolled");
    } else {
      header.classList.remove("header_scrolled");
    }
  });
}
