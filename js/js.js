//definir variaveis
var b;
let a;
const c=3.14;

//if else ; for ; switch

//String, Number, null, underfided

b=2.0;
console.log("O tipo a variavel B:"+typeof(b));

if(a==b){
    console.log("Os valores dessas variaveis são iguais");
}

if(!a===b){
    console.log("Os valores dessas variaveis são diferentes");
}

var itensChurrasco=[];
itensChurrasco.push("Costela");
itensChurrasco.push("Pão de alho");
itensChurrasco.push("Linguiça");
itensChurrasco.push("Maionese");
itensChurrasco.push("Farofa");
itensChurrasco.push("Energético");
itensChurrasco.push("Salada");

for(let i = 0; i<itensChurrasco.length-1; i++){

}
itensChurrasco.forEach((e,i)=>{
    console.log(i+"-"+e);

})

nome="João Henrique Marcelo Boss";
console.log(nome.split("").reverse().join(""));

//Funções com Array
// reverse , join , map

itensChurrasco.map((e)=>{
    console.log(e.length);
})

//filter
console.log(itensChurrasco.filter( (e,i)=>{return i!=3} ));
//filtrar por qualquer elemento que contenha uma letra como p
console.log(itensChurrasco.filter( (e,i)=>{ return e.split("").includes("P"); } ));

console.log(JSON.stringify(itensChurrasco));
array2=JSON.parse("[\"bla\", \"bla\"]");
console.log(array2[1]);
