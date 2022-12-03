const inputUserName = document.querySelector("#name-input");
const outputUserName = document.querySelector("#name-output");

inputUserName.addEventListener("input", () => {
  outputUserName.textContent = inputUserName.value;
});
