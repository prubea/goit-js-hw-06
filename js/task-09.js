function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector(".change-color").addEventListener("click", () => {
  const changeColor = getRandomHexColor();
  document.querySelector(".color").innerText = changeColor;
  document.body.style.backgroundColor = changeColor;
  document.body.style.transition = "background 400ms ease-in-out";
})