export const initPreloader = () => {
  const preloader = document.querySelector(".preloader");
  const percent = document.getElementById("percent");
  const text = document.querySelector(".text");

  const resources = document.images;
  const total = resources.length;
  let loaded = 0;

  if (total === 0) {
    finishPreloader(preloader, text);
    return;
  }

  for (let i = 0; i < total; i++) {
    const imageClone = new Image();
    imageClone.onload = imageClone.onerror = () => {
      loaded++;
      const progress = Math.round((loaded / total) * 100);
      percent.textContent = `${progress}%`;
      if (progress >= 100) finishPreloader(preloader, text);
    };
    imageClone.src = resources[i].src;
  }
};

function finishPreloader(preloader, text) {
  text.textContent = "HILIGHT";
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 600);
}

// export const initPreloader = () => {
//   window.addEventListener("load", () => {
//     const preloader = document.querySelector(".preloader");
//     const percent = document.getElementById("percent");
//     const text = document.querySelector(".text");

//     let count = 0;
//     const speed = 20;

//     const interval = setInterval(() => {
//       if (count < 100) {
//         count++;
//         percent.textContent = `${count}%`;
//       } else {
//         clearInterval(interval);

//         text.textContent = "HILIGHT";

//         setTimeout(() => {
//           preloader.style.opacity = "0";
//           setTimeout(() => {
//             preloader.style.display = "none";
//           }, 500);
//         }, 600);
//       }
//     }, speed);
//   });
// };
