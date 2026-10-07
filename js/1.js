console.log("Olá Mundo");
//Declarar variável em JS.
//variavel global var
var nome = "Romulo";  //define variável global
var sobrenome;
let numero;  //define variavel local por bloco
const numeroPI = 3.141516;

console.log("Variável i: "+typeof(i));
console.log("Variável i: "+typeof(nome));

if (nome=="Romulo"){
    sobrenome="Beninca";
    let idade = 20;
    var pet="dog";
    console.log("nome: " + nome + " Sobrenome: " + sobrenome + " Idade: " + idade + " Pet: " + pet);
}

let idade = 20;
if (idade==20){
    console.log("Nome: "+nome);
}else{
    console.log("Nome: "+"Gustavo");
}

peso=80
altura=1.77
imc=peso/(altura*altura)
console.log("IMC: " + imc)

if(imc<18.5){
    console.log("Abaixo do Peso")
}
else if(imc>=18.5 && imc<25){
    console.log("Peso Normal")
}
else if(imc>=25 && imc<30){
    console.log("Acima do Peso")
}
else if(imc>=30 && imc<35){
    console.log("Obesidade 1")
}
else if(imc>=35 && imc<40){
    console.log("Obesidade 2")
}
else if(imc>40){
    console.log("Obesidade 3")
}

a=2
switch(a){
    case 1: console.log("A"); break
    case 2: console.log("B"); break
    case 3: console.log("C"); break
    case 4: console.log("D")
}

switch(a){
    case a**a==4: console.log("A"); break
    case a==2: console.log("B"); break
    case 3==3: console.log("C"); break
    default: console.log("D")
}

let i=0
while(i<5){
    console.log(i);
    i++
}

let Carnes=["picanha", "costela", "alcatra", "raldinha"]
Carnes.forEach( (v1, index) => {
    console.log(v1 + "index: "+index);
})