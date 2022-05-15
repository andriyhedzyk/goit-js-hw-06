const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value, password.value);
    if (email.value === "" || password.value === "") {
        return alert("Заповніть усі поля");
    }
    else {
        const formData = new FormData(event.currentTarget)
        console.log(formData)
        const values = Object.fromEntries(formData.entries())
        console.log(values);
    }
    event.currentTarget.reset();
});
