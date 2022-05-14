const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  span: document.querySelector("#value"),
};

let counterValue = 0;

refs.buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    refs.span.textContent = counterValue;
});
refs.buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    refs.span.textContent = counterValue;
});
