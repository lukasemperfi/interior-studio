import { initSwiper } from "../../../../../shared/lib/swiper/init-swiper.js";
export const initLatestNews = () => {
  const latestNewsSlider = initSwiper(".latest-news__swiper", {
    slidesPerView: 1.193,
    spaceBetween: 26,

    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 1.72,
      },
      1024: {
        slidesPerView: 2.719,
        spaceBetween: 40,
      },
      1440: {
        slidesPerView: 3.53,
        spaceBetween: 48,
      },
    },
  });
};
