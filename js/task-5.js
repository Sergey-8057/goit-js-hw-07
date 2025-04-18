function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('.body-change-color');
const spanElem = document.querySelector('.color');
const btnElem = document.querySelector('.change-color');

btnElem.addEventListener('click', () => {
  const bodyColor = getRandomHexColor();
  spanElem.textContent = bodyColor;
  bodyElem.style.backgroundColor = bodyColor;
});
