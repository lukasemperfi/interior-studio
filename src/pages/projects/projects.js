import { initHeader } from "../../widgets/header/header.js";
import { initMakeRequestModal } from "../../shared/ui/make-request-modal/make-request-modal.js";
import { initSelect } from "../../shared/ui/dropdown/dropdown.js";
import { initTabs } from "../../shared/ui/tabs/tabs.js";

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initMakeRequestModal();
  initSelect(".hero__dropdown");
  initTabs(".hero__tabs", (value) => {
    console.log(value);
  });
});
