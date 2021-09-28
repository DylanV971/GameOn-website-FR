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
const closeTheModal = document.querySelector(".close"); // the element with the .close class has been recovered

// verification of the field (first name)

function firstNameVerification() {
  const firstName = document.querySelector("#firstname").value;
  console.log(firstName.length);
  if(firstName.length < 1) {
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du prénom");
  }
  //  else if (firstName.length >= 10) {
  //   console.log("Veuillez entrer moins de caractères pour le champ du prénom");
  // }
}

document.querySelector("#firstname").addEventListener("keydown",firstNameVerification);

// verification of the field (last name)

function lastNameVerification() {
  const lastName = document.querySelector("#lastname").value;
  console.log(lastName.length);
  if(lastName.length < 1) {
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom");
  }
}

document.querySelector("#lastname").addEventListener("keydown",lastNameVerification);


//verification of the field (email)

function verificationEmail() {
  const email = document.querySelector("#email").value;
  //the regular expression allows to check the email 
  const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log(email);
  if(emailPattern.test(email) == true) {
    console.log("Votre email est valide");
  } else {
    console.log("Veuillez saisir une adresse email valide Exp(lorem@gmail.com)");
  }
  return emailPattern.test(email);
}

document.querySelector("#email").addEventListener("keydown",verificationEmail);


//check entered (competetion)

function entryCompetition() { 
  const numberOfTournaments = document.querySelector("#quantity").value;
  console.log(numberOfTournaments);
  if(Number(numberOfTournaments) >= 0 && Number(numberOfTournaments) <= 99) {
    console.log("Une valeur a bien été saisie");
  } 
}

document.querySelector("#quantity").addEventListener("keydown",entryCompetition);

//button check (location)

function buttonRadioLocationNewyork() {
  const locationNewyork = document.querySelector("#location1").checked;

  console.log(locationNewyork);
  if(locationNewyork === true) {
    console.log("La ville a bien été choisie");
  }  else {
    console.log("Veuillez sélectionner une ville");
  }
}

document.querySelector("#location1").addEventListener("click",buttonRadioLocationNewyork);

function buttonRadioLocationSanFrancisco() {
  const locationSanFrancisco = document.querySelector("#location2").checked;
  
  console.log(locationSanFrancisco);
  if(locationSanFrancisco === true) {
    console.log("La ville a bien été choisie");
  }  else {
    console.log("Veuillez sélectionner une ville");
  }
}

document.querySelector("#location2").addEventListener("click",buttonRadioLocationSanFrancisco);

function buttonRadioLocationSeattle() {
  const locationSeattle = document.querySelector("#location3").checked;
  console.log(locationSeattle);
  
  if(locationSeattle === true) {
    console.log("La ville a bien été choisie");
  }  else {
    console.log("Veuillez sélectionner une ville");
  }
}

document.querySelector("#location3").addEventListener("click",buttonRadioLocationSeattle);

function buttonRadioLocationChicago() {
  const locationChicago = document.querySelector("#location4").checked;
  console.log(locationChicago);

  if(locationChicago === true) {
    console.log("La ville a bien été choisie");
  }  else {
    console.log("Veuillez sélectionner une ville");
  }
}

document.querySelector("#location4").addEventListener("click",buttonRadioLocationChicago);

function buttonRadioLocationBoston() {
  const locationBoston = document.querySelector("#location5").checked;
  console.log(locationBoston);
  
  if(locationBoston === true) {
    console.log("La ville a bien été choisie");
  }  else {
    console.log("Veuillez sélectionner une ville");
  }
}

document.querySelector("#location5").addEventListener("click",buttonRadioLocationBoston);

function buttonRadioLocationPortland() {
  const locationPortland = document.querySelector("#location6").checked;
  console.log(locationPortland);

  if(locationPortland === true) {
    console.log("La ville a bien été choisie");
  }  else {
    console.log("Veuillez sélectionner une ville");
  }
}

document.querySelector("#location6").addEventListener("click",buttonRadioLocationPortland);

// verification of terms and conditions of use
function termsAndConditions() {
  const general_Conditions = document.querySelector("#conditions").checked;
  console.log(general_Conditions);

  if(general_Conditions === true) {
    console.log("Les conditions générales sont acceptées");
  } else {
    console.log("Veuillez cocher la case des conditions d'utilisation");
    
  }
}

document.querySelector("#conditions").addEventListener("click",termsAndConditions);

// newsletter
function newsLetter() {
  const newsletter = document.querySelector("#newsletter").checked;
  console.log(newsletter);

  if(newsletter === true) {
    console.log("vous souhaitez être prévenus des prochains évènements");
  } else {
    console.log("vous ne souhaitez pas être prévenus");
  }
}

document.querySelector("#newsletter").addEventListener("click",newsLetter);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close the form
closeTheModal.addEventListener("click", closeTheModalForm); 

function closeTheModalForm() {
  modalbg.style.display="none";
}