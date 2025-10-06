export function initHeader() {
  initMenuButton();
  initHeaderScroll();
  initResizeHandler();
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

function initResizeHandler() {
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");
  const menuButtonText = document.querySelector(".menu-button__text");
  const navMenuMobile = document.querySelector(".nav-menu-mobile");
  const menuButton = document.querySelector(".header__menu-button");

  if (
    !hamburger ||
    !header ||
    !menuButtonText ||
    !navMenuMobile ||
    !menuButton
  ) {
    return;
  }

  window.addEventListener("resize", function () {
    if (hamburger.classList.contains("is-open")) {
      hamburger.classList.remove("is-open");
      header.classList.remove("is-open");
      menuButtonText.classList.remove("is-open");
      navMenuMobile.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "auto";
    }
  });
}
