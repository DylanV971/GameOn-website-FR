function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const sendButtonForm = document.querySelector(".btn-submit");
const closingButtonForm = document.querySelector(".close"); 
const confirmationMessage = document.querySelector(".confirmation-container");
const firstButtonToCloseTheConfirmationMessage = document.querySelector(".confirmation-close");
const secondButtonToCloseTheConfirmationMessage = document.querySelector(".closing-button");
let resetTheForm;

//creation of the span element

const errorMessageFirstNameField = document.createElement("span");
errorMessageFirstNameField.classList.add("error-message");
formData[0].appendChild(errorMessageFirstNameField);

const errorMessageLastNameField = document.createElement("span");
errorMessageLastNameField.classList.add("error-message");
formData[1].appendChild(errorMessageLastNameField);

const errorMessageEmail = document.createElement("span");
errorMessageEmail.classList.add("error-message");
formData[2].appendChild(errorMessageEmail);

const errorMessageBirthdateField = document.createElement("span");
errorMessageBirthdateField.classList.add("error-message");
formData[3].appendChild(errorMessageBirthdateField);


const errorMessageCompetition = document.createElement("span");
errorMessageCompetition.classList.add("error-message");
formData[4].appendChild(errorMessageCompetition);


const buttonErrorMessage = document.createElement("span");
buttonErrorMessage.classList.add("error-message");
formData[5].appendChild(buttonErrorMessage);

const errorMessagesConditionsOfUse = document.createElement("span");
errorMessagesConditionsOfUse.classList.add("error-message");
formData[6].appendChild(errorMessagesConditionsOfUse);

function verification(e) {
  e.preventDefault();
  const firstName = document.querySelector("#firstname").value.length;
  const lastName = document.querySelector("#lastname").value.length;
  const email = document.querySelector("#email").value;
  const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const birthDate = new Date(document.querySelector("#birthdate").value);
  const date = birthDate.getDate();
  const month = birthDate.getMonth();  
  const year = birthDate.getFullYear();  
  const tournaments = document.querySelector("#tournaments").value;
  const locationNewYork = document.querySelector("#location1").checked;
  const locationSanFrancisco = document.querySelector("#location2").checked;
  const locationSeattle = document.querySelector("#location3").checked;
  const locationChicago = document.querySelector("#location4").checked;
  const locationBoston = document.querySelector("#location5").checked;
  const locationPortland = document.querySelector("#location6").checked;
  const conditionsOfUse = document.querySelector("#conditionsofuse").checked;
  const nextEvent = document.querySelector("#nextevent").checked;
  let hasError = false;

  //verification of the field first name

  if(firstName < 2 || firstName == "") {
    errorMessageFirstNameField.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    hasError = true;
  } else if (firstName >= 26) {
    errorMessageFirstNameField.textContent = "Veuillez entrer moins de caractères pour le champ du prénom";
    hasError = true;
  } else {
    errorMessageFirstNameField.textContent = "";
  }
  
  //verification of the field last name

  if(lastName < 2 || lastName == "") {
    errorMessageLastNameField.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";  //error message first name field
    hasError = true;
  } else if (lastName >= 26) {
    errorMessageLastNameField.textContent = "Veuillez entrer moins de caractères pour le champ du nom";
    hasError = true;
  } else {
    errorMessageLastNameField.textContent = "";
  }

  //email field verification

  if(emailPattern.test(email) == false) {
    errorMessageEmail.textContent = "Veuillez saisir une adresse email valide Exp(lorem@gmail.com)";
    hasError = true;
  } else {
    errorMessageEmail.textContent = "";
  }

  //verification of the date of birth field

  if(date && month && year) {
    errorMessageBirthdateField.textContent = "";
  } else {
    errorMessageBirthdateField.textContent = "veuillez entrer votre date de naissance";
    hasError = true;
  }

  //verification of the tournament participation field

  if(tournaments && tournaments >=0 && tournaments <=99) {
    errorMessageCompetition.textContent = "";
  } else {
    errorMessageCompetition.textContent = "Veuillez entrer un nombre entre 0 et 99";
    hasError = true;
  }

  //verification of the location buttons

  if(locationNewYork || locationSanFrancisco || locationSeattle || locationChicago || locationBoston || locationPortland == true ) {
    buttonErrorMessage.textContent = "";
  }  else {
    buttonErrorMessage.textContent = "Veuillez sélectionner une ville";
    hasError = true;
  }

  // verification of the conditions of use

  if(conditionsOfUse == true) {
    errorMessagesConditionsOfUse.textContent = "";
  } else {
    errorMessagesConditionsOfUse.textContent = "Veuillez cocher la case des conditions d'utilisation";
    hasError = true;
  }

  // checks if the errors in the fields are true or false

  if(hasError == true) {
    confirmationMessage.style.display = "none";
  } else {
    modalbg.style.display="none";
    confirmationMessage.style.display = "block";
  }
}  

//verification of the form when clicking on the submit button

sendButtonForm.addEventListener("click",verification);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close the form modal

closingButtonForm.addEventListener("click", closeTheFormModal); 

function closeTheFormModal() {
  modalbg.style.display="none";
}

// closing button of the confirmation message

firstButtonToCloseTheConfirmationMessage.addEventListener("click", firstClosingButton);

function firstClosingButton() {
  confirmationMessage.style.display = "none";
   resetTheForm = document.getElementById("resetform").reset();
}

secondButtonToCloseTheConfirmationMessage.addEventListener("click", secondClosingButton);

function secondClosingButton() {
  confirmationMessage.style.display = "none";
   resetTheForm = document.getElementById("resetform").reset();
}