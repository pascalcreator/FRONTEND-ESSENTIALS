//voornaam
var voornaam = prompt("wat is je voornaam");
var element = document.getElementById("id01");
element.innerHTML = voornaam;

//achternaam
var achternaam = prompt("wat is je achternaam");
var element = document.getElementById("id02");
element.innerHTML = achternaam;

//email
var email = prompt("wat is je email");
var element = document.getElementById("id03");
element.innerHTML = email;

//woonplaats
var woonplaats = prompt("waar woon je ");
var element = document.getElementById("id04");
element.innerHTML = woonplaats;

//leeftijd
var leeftijd = prompt("hoe oud ben je");
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
    document.body.style.backgroundColor = "chartreuse";
}
var element = document.getElementById("id05");
element.innerHTML = leeftijd;

