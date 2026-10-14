//no navegador o js tem window
console.log(window.screen)

window.document.body.innerHTML="<p>Olá<p>"
window.document.body.style.backgroundColor="pink"

let div=document.createElement("div");
let pnome=document.createElement("p");
let ppeso=document.createElement("p");
let paltura=document.createElement("p");

document.body.appendChild(div);

//campo nome
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="nome "
div.appendChild(temp);
temp=document.createElement("input")
temp.id="inputNome"
div.appendChild(temp)

//campo peso
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="peso "
div.appendChild(temp);
temp=document.createElement("input")
temp.id="inputPeso"
div.appendChild(temp)

//campo altura
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="altura "
div.appendChild(temp);
temp=document.createElement("input")
temp.id="inputAltura"
div.appendChild(temp)

//add botão

div.appendChild(document.createElement("br"))
tmp=document.createElement("button");
tmp.id="btnCalcular"
tmp.innerHTML="Calcular"
div.append(tmp)

tmp.addEventListener("click",()=>{
    inputPeso=document.getElementById("inputPeso")
    inputAltura=document.getElementById("inputAltura")
    peso=Number.parseFloat(inputPeso.value)
    altura=Number.parseFloat(inputAltura.value)
    imc=peso/(altura*altura);
    console.log(imc*1000)

    result=document.createElement("p");
    result.innerHTML=imc
    div.appendChild(result);
})





