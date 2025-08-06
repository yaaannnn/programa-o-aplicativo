const prompt = require("prompt-sync")();
let pessoas = [];

let numero_pessoas = Number(prompt("Qual o tamanho do grupo de pessoas?: "));

for (let i = 1; i <= numero_pessoas; i++) {
    let nome = prompt(`Qual o nome da ${i}° pessoa: `);
    let idade = Number(prompt(`Qual a idade da ${i}° pessoa: `));

    pessoas.push({ nome, idade });
}

let pessoaMaisVelha = pessoas[0];
let pessoaMaisNova = pessoas[0];

for (let i = 1; i < pessoas.length; i++) {
    if (pessoas[i].idade > pessoaMaisVelha.idade) {
        pessoaMaisVelha = pessoas[i];
    }
    if (pessoas[i].idade < pessoaMaisNova.idade) {
        pessoaMaisNova = pessoas[i];
    }
}

console.log(`\nPessoa mais velha: ${pessoaMaisVelha.nome}, idade ${pessoaMaisVelha.idade}`);
console.log(`Pessoa mais nova: ${pessoaMaisNova.nome}, idade ${pessoaMaisNova.idade}`);
