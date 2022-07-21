function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");

document.querySelector("[data-create]").addEventListener("click", createBoxes);
document.querySelector("[data-destroy]").addEventListener("click", destroyBoxes);



function createBoxes(amount) {
  amount = input.value;
  const box = [];
  
  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;
    let color = getRandomHexColor();
  
    box.push(`<div style="height:${size}px ; width:${size}px ; background-color: ${color};"></div>`);
  }
  
  const markup = box.join("");
  return boxes.insertAdjacentHTML("afterbegin", markup);
}
function destroyBoxes() {
  boxes.innerHTML = "";
};