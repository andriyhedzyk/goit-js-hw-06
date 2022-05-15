const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.oninput = function () {
  span.style.fontSize = input.value + "px";
};