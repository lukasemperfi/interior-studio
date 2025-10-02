import { initHeader } from "../../widgets/header/header.js";
import { initHero } from "./ui/sections/hero/hero.js";
import { initMakeRequestModal } from "../../shared/ui/make-request-modal/make-request-modal.js";

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHero();
  initMakeRequestModal();
});
