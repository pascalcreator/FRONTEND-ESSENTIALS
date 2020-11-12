let voornaam = prompt("wat is je voornaam");
var elementvoornaam1 = document.getElementById("voornaam");
elementvoornaam1.innerHTML = voornaam;

let achternaam = prompt("wat is je achternaam");
var elementachternaam = document.getElementById("achternaam");
elementachternaam.innerHTML = achternaam;

let voorAchternaam = "Website " + voornaam + " " + achternaam;
var elementVoornaam = document.getElementById("voorAchternaam");
elementVoornaam.innerHTML = voorAchternaam;

let email = prompt("wat is je email");
var elementemail = document.getElementById("email");
elementemail.innerHTML = email;

let woonplaats = prompt("waar woon je ");
var elementwoonplaats = document.getElementById("woonplaats");
elementwoonplaats.innerHTML = woonplaats;

let leeftijd = prompt("hoe oud ben je");
if(leeftijd == 16){
    document.body.style.backgroundColor = "orange";
}
if(leeftijd == 17){
    document.body.style.backgroundColor = "blue";
}
if(leeftijd == 18){
    document.body.style.backgroundColor = "gold";
}
if(leeftijd == 19){
    document.body.style.backgroundColor = "green";
}
if(leeftijd == null){
    document.body.style.backgroundColor = "red";
}
var element = document.getElementById("leeftijd");
element.innerHTML = leeftijd;

let bezoeker= {
    voornaam:voornaam,
    achternaam:achternaam,
    email:achternaam,
    woonplaats:woonplaats,
    leeftijd:leeftijd
}