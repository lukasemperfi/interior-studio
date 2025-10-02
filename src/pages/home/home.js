import { initHeader } from "../../widgets/header/header.js";
import { initHero } from "./ui/sections/hero/hero.js";
import { initModal } from "../../shared/ui/modal/modal.js";
import { addClickToAll } from "../../shared/ui/button/button.js";
import { initForm } from "../../shared/ui/make-request-form/make-request-form.js";

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHero();

  const makeRequestModal = initModal(".make-request-modal");

  addClickToAll(".make-request-btn", () => {
    makeRequestModal.open();
  });

  initForm(".make-request-form");
});
