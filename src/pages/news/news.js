import { initHeader } from "../../widgets/header/header.js";
import { initMakeRequestModal } from "../../shared/ui/make-request-modal/make-request-modal.js";
import { initSelect } from "../../shared/ui/dropdown/dropdown.js";
import { initTabs } from "../../shared/ui/tabs/tabs.js";

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initMakeRequestModal();
  initSelect(".hero__dropdown");
  initTabs(".hero__tabs", (value) => {
    const newsList = document.querySelector(".news__list");
    const newsListItems = Array.from(newsList.children);

    if (value === "all") {
      newsListItems.forEach((news) => {
        news.classList.remove("hidden");
      });
      return;
    }

    newsListItems.forEach((news, index) => {
      news.classList.add("hidden");

      if (value === "blog" && index === 0) {
        news.classList.remove("hidden");
      } else if (value === "news" && index === 1) {
        news.classList.remove("hidden");
      } else if (value === "advice-from-the-designer" && index === 2) {
        news.classList.remove("hidden");
      }
    });
  });
});
