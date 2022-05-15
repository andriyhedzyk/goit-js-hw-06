const refs = {
  input: document.getElementById("name-input"),
  span: document.getElementById("name-output")
}
refs.input.addEventListener('input', onInputChange);       

function onInputChange(event) {
  console.log(event.currentTarget.value) 
    if (refs.input.value === "") {
        refs.span.innerHTML = "Anonymous";
    } else {
        refs.span.textContent = event.currentTarget.value;
    }
}

// Варіант №2
// refs.input.oninput = function () {
//   if (refs.input.value === "") {
//     refs.span.innerHTML = "Anonymous";
//   } else {
//     refs.span.innerHTML = refs.input.value;
//   }
// };