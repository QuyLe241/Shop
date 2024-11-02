document.addEventListener("DOMContentLoaded", function () {
  let emailInput = document.getElementById("floatingInput");
  let emailError = document.getElementById("emailError");
  let checkbox = document.getElementById("exampleCheck1");
  let checkboxError = document.getElementById("checkboxError");
  let form = document.getElementById("myForm");

  function checkEmailValue(email) {
    let regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email);
  }

  emailInput.addEventListener("blur", function () {
    let email = emailInput.value.trim();
    if (email === "") {
      emailError.textContent = "A valid email address is required.";
      emailError.classList.add("show");
    } else if (!checkEmailValue(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.classList.add("show");
    } else {
      emailError.classList.remove("show");
    }
  });

  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      checkboxError.textContent = "The checkbox is required. Please select it.";
      checkboxError.classList.add("show");
    } else {
      checkboxError.classList.remove("show");
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = emailInput.value.trim();

    if (email === "") {
      emailError.textContent = "A valid email address is required.";
      emailError.classList.add("show");
    } else if (!checkEmailValue(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.classList.add("show");
    } else {
      emailError.classList.remove("show");
    }

    if (!checkbox.checked) {
      checkboxError.textContent = "The checkbox is required. Please select it.";
      checkboxError.classList.add("show");
    } else {
      checkboxError.classList.remove("show");
    }
  });
});
