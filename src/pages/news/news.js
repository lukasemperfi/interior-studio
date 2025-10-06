import { initHeader } from "../../widgets/header/header.js";
import { initMakeRequestModal } from "../../shared/ui/make-request-modal/make-request-modal.js";
import { initSelect } from "../../shared/ui/border-select/border-select.js";

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initMakeRequestModal();
  initSelect(".border-select");
});
