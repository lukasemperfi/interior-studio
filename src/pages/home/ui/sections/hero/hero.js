import { initSwiper } from "../../../../../shared/lib/swiper/init-swiper.js";

export const initHero = () => {
  const heroSlider = initHeroSwiper();

  createSliderNav(".hero__slider-nav", heroSlider);
};

function initHeroSwiper() {
  return initSwiper(".hero-swiper", {
    slidesPerView: 1.19,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 1.17,
      },
      1024: {
        slidesPerView: 1.186,
      },
      1440: {
        slidesPerView: 1.173,
      },
    },
  });
}

function createSliderNav(container, slider) {
  const containerEl = document.querySelector(container);

  if (!containerEl) {
    return;
  }

  const updateNavigation = () => {
    const currentSlide = slider.realIndex + 1;
    const totalSlides = slider.slides.length;
    const progress = (slider.realIndex / (totalSlides - 1)) * 100;

    const currentSlideEl = containerEl.querySelector(".slider-nav__current");
    currentSlideEl.textContent = `0${currentSlide}`;

    const totalSlidesEl = containerEl.querySelector(".slider-nav__total");
    totalSlidesEl.textContent = `0${totalSlides}`;

    const progressBar = containerEl.querySelector(".slider-nav__progress-bar");
    progressBar.style.width = `${progress}%`;
  };

  containerEl.innerHTML = `
    <div class="slider-nav">
      <button class="slider-nav__prev">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9L1 5L5 1" stroke="white" stroke-width="0.75" />
        </svg>
      </button>
      <div class="slider-nav__current">01</div>
      <div class="slider-nav__progress">
        <div class="slider-nav__progress-bar" style="width: 0%"></div>
      </div>
      <div class="slider-nav__total">04</div>
      <button class="slider-nav__next">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="white" stroke-width="0.75" />
        </svg>
      </button>
    </div>
  `;

  updateNavigation();

  const prevButton = containerEl.querySelector(".slider-nav__prev");
  const nextButton = containerEl.querySelector(".slider-nav__next");

  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    slider.slidePrev();
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    slider.slideNext();
  });

  slider.on("slideChange", updateNavigation);
}
