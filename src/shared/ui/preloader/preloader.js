export const initPreloader = () => {
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const percent = document.getElementById("percent");
    const text = document.querySelector(".text");

    let count = 0;
    const speed = 20;

    const interval = setInterval(() => {
      if (count < 100) {
        count++;
        percent.textContent = `${count}%`;
      } else {
        clearInterval(interval);

        text.textContent = "HILIGHT";

        setTimeout(() => {
          preloader.style.opacity = "0";
          setTimeout(() => {
            preloader.style.display = "none";
          }, 500);
        }, 600);
      }
    }, speed);
  });
};
