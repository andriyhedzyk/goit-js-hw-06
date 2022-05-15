const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const nameOfColour = document.querySelector(".color");
const changeColour = () => {
  body.style.backgroundColor = getRandomHexColor();
  nameOfColour.textContent = body.style.backgroundColor;
};
btn.addEventListener("click", changeColour);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}