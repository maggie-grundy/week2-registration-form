// HTML Selectors
const myForm = document.getElementById("myForm");
const outputDiv = document.getElementById("output");

// Get variable of inputs
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("emailInfo");
const birthdateInput = document.getElementById("birthdate");

// Event Listener
myForm.addEventListener("submit", function (event) {
  // Prevents action from refreshing the page (it works!)
  event.preventDefault();

  console.log(`First Name: ${firstNameInput.value}`);
  console.log(`Last Name: ${lastNameInput.value}`);
  console.log(`Email: ${emailInput.value}`);
  console.log(`Birthday: ${birthdateInput.value}`);
  //not adding interests here bc we'll go over arrays more tomorrow in class

  // Get the output

  outputDiv.innerHTML = `
    <p>Hello! My first name is: ${firstNameInput.value}</p>
    <p>My last name is: ${lastNameInput.value}.</p>
    <p>My email is: ${emailInput.value}.</p>
    <p>My birthday is: ${birthdateInput.value}.</p>
  `;

  //Display div with form info on submit
  outputDiv.style.display = "block";

  //Clear inputs
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  birthdateInput.value = "";
});
