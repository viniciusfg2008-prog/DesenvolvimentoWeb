
let nome="Luana";
var sobrenome;
const e=2.78


if (nome=="Luana") {
    sobrenome = "Oecksler ";
    let idade=17;
    var pet = "dog";
    console.log("Nome: "+nome+ " Sobrenome: "+sobrenome+" Idade: "+idade+ " Pet: "+pet);
}

let idade=17;
//console.log("nome:"+nome+ "sobrenome:"+sobrenome+"idade:"+idade+ "pet:"+pet);
//estruturas de seleção no JS
if (idade==17) {
    console.log("A")
} if(idade ==="17") {
    console.log("B");
}
peso=60
altura=1.68
imc=peso/(altura*altura)
console.log(" IMC:" +imc)

//classificação do IMC
if (imc<18.5) {
    console.log("Abaixo do peso" )   
}
else if(imc>=18.5 && imc<25){
    console.log("Peso normal")
}
else if(imc>=25 && imc<30){
    console.log("Acima do peso")
}
else if(imc>=30 && imc<35){
    console.log("Obesidade 1")
}
else if(imc>=35 && imc<40){
    console.log("Obesidade 2")
}
else if(imc>=40){
    console.log("Obesidade 3")
}

//switch case estrutura de seleção para imc
switch(true){
    case imc<18.5: console.log("Abaixo do pese"); break;
    case imc>=18.5 && imc<30: console.log("Peso normal"); break;
    case imc>=30 && imc<35: console.log("Obesidade 1"); break;
    case imc>=35 && imc<40: console.log("Obesidade 2"); break;
    case imc>40: console.log("Obesidade 3"); break;
}

//switch case estrutura de seleção
a=2;
switch (a) {
    case 1: console.log("A"); break;
    case 2: console.log("B"); break;
    case 3: console.log("C"); break;
    default: console.log("D");
}

//switch case estrutura com expressão

switch(a){
    case a**a==4: console.log("A"); break;
    case a==2: console.log("B"); break;
    case 3==3: console.log("C"); break;
    default: console.log("D");
}

//estrutura de repetição while

let i=0
while(i<5){
    console.log(i);
    i++
}

//estrutura de repetição

for (let i=0; i<5;i++) {
    console.log(i);
    
}

//arrays
let carnes=["picanha","costela","alcatra","fraldinha"];

carnes.forEach( (v1,index) => {
   console.log(v1 + "index:" +index);
    }
);