function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const background = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  colorRef.textContent = randomColor;
  background.style.backgroundColor = randomColor;
});
