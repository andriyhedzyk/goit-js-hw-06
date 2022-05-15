const inputEl = document.getElementById("validation-input");

const totalLenght = inputEl.getAttribute("data-length");
const intTotallenght = parseInt(totalLenght, 10);

const inputEloninput = function (event) {
  if (event.currentTarget.value.length === intTotallenght) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  }
  inputEl.classList.add("invalid");
  inputEl.classList.remove("valid");
};
inputEl.addEventListener("blur", inputEloninput);
