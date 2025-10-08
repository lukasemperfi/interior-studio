import { initHeader } from "../../widgets/header/header.js";
import { initMakeRequestModal } from "../../shared/ui/make-request-modal/make-request-modal.js";
import { initLatestNews } from "./ui/sections/latest-news/latest-news.js";

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initMakeRequestModal();
  initLatestNews();
});
