import { initHeader } from "../../widgets/header/header.js";
import { initMakeRequestModal } from "../../shared/ui/make-request-modal/make-request-modal.js";
import { initPreloader } from "../../shared/ui/preloader/preloader.js";
import { initPhilosophy } from "./ui/sections/philosophy/philosophy.js";

initPreloader();

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initMakeRequestModal();
  initPhilosophy();
});
