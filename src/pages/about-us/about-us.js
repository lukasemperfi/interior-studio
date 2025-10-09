import { initHeader } from "../../widgets/header/header.js";
import { initMakeRequestModal } from "../../shared/ui/make-request-modal/make-request-modal.js";
import { initPreloader } from "../../shared/ui/preloader/preloader.js";

initPreloader();

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initMakeRequestModal();
});
