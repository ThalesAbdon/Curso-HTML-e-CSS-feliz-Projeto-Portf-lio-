const buttonRight = document.querySelector(".button-arrow.-right");
const buttonLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements");
let pixels = 400;

// if (pixels <= 400) {
//     buttonRight.style.display = "none";
//     buttonLeft.style.display = "inline";
//   }

buttonRight.addEventListener("click", function () {
  if (pixels >= 1400) {
    pixels = 400;
    elements.style = `transform: translateX(${400}px)`;
  } else {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
  }
});
buttonLeft.addEventListener("click", function () {
  if (pixels <= -1400) {
    pixels = -600;
    elements.style = `transform: translateX(${-600}px)`;
  } else {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
  }
});
