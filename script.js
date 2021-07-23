const btn = document.querySelector(".btn");
const colorh2 = document.querySelector("#color");
const colorbox = document.querySelector(".colorbox");
const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const generate = () => {
  let random = "#";
  for (let i = 0; i < 6; i++) {
    random += hex[Math.floor(Math.random() * 16)];
  }
  colorh2.textContent = random;
  colorbox.style.backgroundColor = random;
  console.log(document.body);
  document.body.style.backgroundImage = `linear-gradient(to right, ${random}80 0%, ${random}2a 100%)`;
  btn.style.borderColor = random;
};

window.addEventListener("DOMContentLoaded", generate);

btn.addEventListener("click", generate);
