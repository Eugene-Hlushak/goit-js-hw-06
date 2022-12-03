function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesRef = document.querySelector("#boxes");
const userInput = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  const createdBoxes = [];
  let sizes = 30;
  for (let i = 1; i <= amount; i += 1) {
    let box = document.createElement("div");

    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();

    createdBoxes.push(box);
    sizes += 10;
  }
  boxesRef.append(...createdBoxes);
}

createBtn.addEventListener("click", () => {
  createBoxes(userInput.value);
});

destroyBtn.addEventListener("click", () => {
  boxesRef.innerHTML = "";
});
