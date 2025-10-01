import { initHeader } from "../../widgets/header/header.js";
import { initHero } from "./ui/sections/hero/hero.js";
import { initModal } from "../../shared/ui/modal/modal.js";
import { addClickToAll } from "../../shared/ui/button/button.js";

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHero();

  const contactModal = initModal(".modal_contact");

  addClickToAll(".make-request-btn", () => {
    contactModal.open();
  });
});
