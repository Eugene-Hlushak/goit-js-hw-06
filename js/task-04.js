let counterValue = 0;
const displayValue = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const decrementValue = () => {
  counterValue -= 1;
  displayValue.textContent = counterValue;
  console.log(counterValue);
};

const incrementValue = () => {
  counterValue += 1;
  displayValue.textContent = counterValue;
  console.log(counterValue);
};

btnDecrement.addEventListener("click", decrementValue);

btnIncrement.addEventListener("click", incrementValue);
