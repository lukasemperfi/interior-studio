import { initHeader } from "../../widgets/header/header.js";
import { initMakeRequestModal } from "../../shared/ui/make-request-modal/make-request-modal.js";
import { initSelect } from "../../shared/ui/dropdown/dropdown.js";
import { initTabs } from "../../shared/ui/tabs/tabs.js";
import { initPreloader } from "../../shared/ui/preloader/preloader.js";

initPreloader();

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initMakeRequestModal();
  initSelect(".hero__dropdown");
  initTabs(".hero__tabs", (value) => {
    const projectsList = document.querySelector(".projects-list__list");
    const projectsListItems = Array.from(projectsList.children);

    if (value === "house") {
      projectsList.style.gridTemplateRows = "";

      projectsListItems.forEach((project) => {
        project.classList.remove("hidden");
        project.style.gridArea = "";
      });
      return;
    }

    projectsList.style.gridTemplateRows = "1fr";

    projectsListItems.forEach((project, index) => {
      project.classList.add("hidden");

      if (value === "apartments" && index === 0) {
        project.classList.remove("hidden");
      } else if (value === "commerce" && index === 1) {
        project.classList.remove("hidden");
        project.style.gridArea = "item-1";
      } else if (value === "architecture" && index === 2) {
        project.classList.remove("hidden");
      }
    });
  });
});
