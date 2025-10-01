export function initModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  if (!modal) {
    console.warn(`Modal with selector "${modalSelector}" not found`);
    return;
  }

  const modalOverlay = modal.querySelector(".modal__overlay");
  const modalContent = modal.querySelector(".modal__content");
  const modalCloseBtn = modal.querySelector(".modal__close-btn");
  const header = document.querySelector(".header");

  const openModal = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.paddingRight = `${scrollbarWidth}px`;
    header.style.paddingRight = `${scrollbarWidth}px`;

    modal.classList.add("modal_active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("modal_active");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    header.style.paddingRight = "";
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal_active")) {
      closeModal();
    }
  });

  if (modalContent) {
    modalContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  return {
    open: openModal,
    close: closeModal,
    element: modal,
  };
}
