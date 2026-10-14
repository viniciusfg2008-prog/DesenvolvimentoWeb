// no navegador o js tem window

console.log(window.screen)

document.body.innerHTML="<p>Olá</p>"
document.body.style.backgroundColor="gray"

let div=document.createElement("div");
let pnome=document.createElement("p");
let ppeso=document.createElement("p");
let paltura=document.createElement("p");

document.body.appendChild(div)

//NOME
temp=document.createElement("label");
temp.innerHTML="nome ";
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputNome"
div.appendChild(temp)

div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="peso ";
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputPeso"
div.appendChild(temp)

div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="altura ";
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputAltura"
div.appendChild(temp)

//add botão
div.appendChild(document.createElement("br"))
tmp=document.createElement("button")
tmp.id="btnCalcular"
tmp.innerHTML="calcular"
div.append(tmp)

tmp.addEventListener("click",()=>{
    inputPeso=document.getElementById("inputPeso")
    inputAltura=document.getElementById("inputAltura")
    peso=Number.parseFloat(inputPeso.value)
    altura=Number.parseFloat(inputAltura.value)
    imc=peso/(altura*altura)
    console.log(imc*10000)
    result=document.createElement("p");
    result.innerHTML=imc*10000
    div.appendChild(result)
})

