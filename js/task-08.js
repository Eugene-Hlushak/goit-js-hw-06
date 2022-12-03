const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  if (elements.email.value === "" || elements.password.value === "") {
    console.log(alert("Всі поля повинні бути заповнені!"));
  }

  const formData = new FormData(event.currentTarget);
  let dataFormObject = {};
  formData.forEach((elementValue, elementName) => {
    dataFormObject[elementName] = elementValue;
  });
  console.log(dataFormObject);
  form.reset();
}
