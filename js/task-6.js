const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = Number (input.value);
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  input.value = "";
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxSize = 30; 
  for (let i = 0; i < amount; i++) {
    const box = document.  createElement("div");
    const size = boxSize + i * 10;
    box.style.width = `${ size } px`;
    box.style.height = `${ size } px`;
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(box);

  }
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}