const userInput = document.querySelector('input[data-length="6"]');

userInput.addEventListener("blur", () => {
  Number(userInput.dataset.length) !== userInput.value.length
    ? userInput.classList.add("invalid")
    : userInput.classList.replace("invalid", "valid");
});
