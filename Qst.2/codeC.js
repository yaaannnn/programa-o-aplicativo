const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));

if (idade <= 12){
    console.log("Você é uma criança");
} else if (idade >= 13 && idade <= 17 ){
    console.log("Você é um adolescente");
} else if (idade >= 18 && idade <= 64){
    console.log("Você é um adulto");
} else if (idade >= 65){
    console.log("Você é um idoso");
}