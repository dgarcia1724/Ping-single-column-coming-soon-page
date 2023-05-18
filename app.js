const inputAndBtn = document.querySelector(".inputAndBtn");

const input = inputAndBtn.querySelector("input");
const button = inputAndBtn.querySelector("button");
const errorMessage = inputAndBtn.querySelector(".errorMessage");

const wrong = function () {
  input.classList.add("borderRed");
  errorMessage.style.display = "block";
};

button.addEventListener("click", function () {
  if (input.value === "") {
    errorMessage.innerHTML = "Email cannot be empty";
    wrong();
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    errorMessage.innerHTML = "Please provide a valid email address";
    wrong();
  } else {
    input.classList.remove("borderRed");
    errorMessage.style.display = "none";
  }
});
