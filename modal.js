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
let ResetTheForm;

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

  // verification of values in the console
  
  // console.log(firstName);
  // console.log(lastName);
  // console.log(email);

  // console.log(date);
  // console.log(month);
  // console.log(year);
  // // console.log(birthDate);
  // console.log(tournaments);

  // console.log(locationNewYork);
  // console.log(locationSanFrancisco);
  // console.log(locationSeattle);
  // console.log(locationChicago);
  // console.log(locationBoston);
  // console.log(locationPortland);

  // console.log(conditionsOfUse);
  // console.log(nextEvent);

  //verification of the field first name

  if(firstName < 2 || firstName == "") {
    errorMessageFirstNameField.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    // console.log("Veuillez entrer 2 caractères ou plus pour le champ du prénom");
    hasError = true;
    // console.log(hasError);
  } else if (firstName >= 13) {
    errorMessageFirstNameField.textContent = "Veuillez entrer moins de caractères pour le champ du prénom";
    // console.log("Veuillez entrer moins de caractères pour le champ du prénom");
    hasError = true;
    // console.log(hasError);
  } else {
    errorMessageFirstNameField.textContent = "";
  }
  
  //verification of the field last name

  if(lastName < 2 || lastName == "") {
    errorMessageLastNameField.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";  //error message first name field
    // console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom"); 
    hasError = true;
    // console.log(hasError);
  } else if (lastName >= 13) {
    errorMessageLastNameField.textContent = "Veuillez entrer moins de caractères pour le champ du nom";
    // console.log("Veuillez entrer moins de caractères pour le champ du prénom");
    hasError = true;
    // console.log(hasError);
  } else {
    errorMessageLastNameField.textContent = "";
  }

  //email field verification

  if(emailPattern.test(email) == false) {
    errorMessageEmail.textContent = "Veuillez saisir une adresse email valide Exp(lorem@gmail.com)";
    // console.log("Veuillez saisir une adresse email valide Exp(lorem@gmail.com)");
    hasError = true;
    // console.log(hasError);
  } else {
    errorMessageEmail.textContent = "";
    // console.log("Votre email est valide");
  }

  //verification of the date of birth field

  if(date && month && year) {
    errorMessageBirthdateField.textContent = "";
    // console.log("Date de naissance saisie");
  } else {
    errorMessageBirthdateField.textContent = "veuillez entrer votre date de naissance";
    // console.log("veuillez entrer votre date de naissance");
    hasError = true;
    // console.log(hasError);
  }

  //verification of the tournament participation field

  if(tournaments && tournaments >=0 && tournaments <=99) {
    errorMessageCompetition.textContent = "";
    // console.log("Une valeur a bien été saisie");
  } else {
    errorMessageCompetition.textContent = "Veuillez entrer un nombre entre 0 et 99";
    hasError = true;
    // console.log(hasError);
  }

  //verification of the location buttons

  if(locationNewYork || locationSanFrancisco || locationSeattle || locationChicago || locationBoston || locationPortland == true ) {
    buttonErrorMessage.textContent = "";
    // console.log("La ville a bien été choisie");
  }  else {
    buttonErrorMessage.textContent = "Veuillez sélectionner une ville";
    // console.log("Veuillez sélectionner une ville");
    hasError = true;
    // console.log(hasError);
  }

  // verification of the conditions of use

  if(conditionsOfUse == true) {
    errorMessagesConditionsOfUse.textContent = "";
    // console.log("Les conditions générales ont été acceptées");
  } else {
    errorMessagesConditionsOfUse.textContent = "Veuillez cocher la case des conditions d'utilisation";
    // console.log("Veuillez cocher la case des conditions d'utilisation");
    hasError = true;
    // console.log(hasError);
  }

  // checks if the errors in the fields are true or false

  if(hasError == true) {
    confirmationMessage.style.display = "none";
    // console.log("Une ou plusieurs erreurs ont été trouvée dans le formulaire");
    
  } else {
    modalbg.style.display="none";
    confirmationMessage.style.display = "block";
    // console.log("Aucune erreur trouvée");
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
   ResetTheForm = document.getElementById("resetform").reset();

}

secondButtonToCloseTheConfirmationMessage.addEventListener("click", secondClosingButton);

function secondClosingButton() {
  confirmationMessage.style.display = "none";
   ResetTheForm = document.getElementById("resetform").reset();
}