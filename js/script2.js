let h1titulo=document.getElementById("titulo");
h1titulo.innerHTML="I6 2026";

let h1 = document.createElement("h1");
h1.innerHTML="Luiza";
document.body.appendChild(h1);

let InputPeso = document.querySelector("#Peso")
let InputAltura = document.querySelector("#Altura")
let calc = document.querySelector("#calc")
let pIMC = document.querySelector("#IMC")

let peso = Peso.value;
let altura = Altura.value

let imc = Peso/(Altura*Altura)
console.log(imc)