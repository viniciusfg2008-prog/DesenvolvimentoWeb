
var b;
let a;

b=2.0;
console.log("O tipo da variável B"+typeof(b));
a="2";
console.log("O tipo da variável A"+typeof(a));

if(a==b){
    console.log("O valor dessas variáveis é igual");
}
if(!(a===b)){
    console.log("O valor dessas variáveis são diferentes");
}

var ItemChurrasco =[];
ItemChurrasco.push("Costela", "Pão de Alho", "Linguiça");

for (let i = 0; i<ItemChurrasco.length-1; i++){

}

ItemChurrasco.forEach((e,i)=>{
console.log(i+"-"+e);
})

nome="João Henrique Marcelo Boos";
console.log(nome.split("").reverse().join(""));

ItemChurrasco.map((e)=>{
    console.log(e.length);
})

//filter
console.log(ItemChurrasco.filter( (e,i)=>{return i!=3} ))

console.log(ItemChurrasco.filter( (e,i)=>{
    //true false
    return e.split("").includes("P")
}))

console.log(JSON.stringify)