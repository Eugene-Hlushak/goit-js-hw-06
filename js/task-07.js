const fontSizeControler = document.querySelector("#font-size-control");
// console.log(fontSizeControler);
const textRef = document.querySelector("#text");
// textRef.style.fontSize = `${fontSizeControler.value}px`;
// console.log(textRef);

fontSizeControler.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
  //   console.log(`Current font-size: ${textRef.style.fontSize}`);
}
