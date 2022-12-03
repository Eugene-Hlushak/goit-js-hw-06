const inputUserName = document.querySelector("#name-input");
const outputUserName = document.querySelector("#name-output");

inputUserName.addEventListener("input", (event) => {
  return event.currentTarget.value
    ? (outputUserName.textContent = event.currentTarget.value)
    : (outputUserName.textContent = "Anonymous");
});
