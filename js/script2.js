let h1titulo = document.getElementById("titulo");
h1titulo.innerHTML = "I62026";

let h1 = document.createElement("h1");
h1.innerHTML = "Olá";
document.body.appendChild(h1);

let pesoInput = document.querySelector("#peso");
let alturaInput = document.querySelector("#altura");
let botaoCalcular = document.querySelector("#calc");
let pimc = document.querySelector("#IMC");
let imgImc = document.querySelector("#imgImc");

botaoCalcular.addEventListener("click", () => {
    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value);

    if (!peso || !altura || altura <= 0) {
        pimc.innerHTML = "Digite peso e altura válidos";
        imgImc.style.display = "none";
        return;
    }

    let imc = peso / (altura * altura);
    pimc.innerHTML = `IMC: ${imc.toFixed(2)}`;
    console.log(imc);

    if (imc < 18.5) {
        imgImc.src = "../img/abaixopeso.png";
        console.log("Abaixo do peso");
    } else if (imc < 25) {
        imgImc.src = "../img/normal.png";
        console.log("Peso normal");
    } else if (imc < 30) {
        imgImc.src = "../img/sobrepeso.png";
        console.log("Sobrepeso");
    } else if (imc < 35) {
        imgImc.src = "../img/obesidade1.png";
        console.log("Obesidade grau 1");
    } else if (imc < 40) {
        imgImc.src = "../img/obesidade2.png";
        console.log("Obesidade grau 2");
    } else {
        imgImc.src = "../img/obesidade3.png";
        console.log("Obesidade grau 3");
    }

    imgImc.style.display = "block";
});