const prompt = require("prompt-sync")();

let pontos = 0;

for (let contador = 1; contador <= 10; contador++){
    console.log(`Batalha${contador}: Você gnhou 10 pontos de experiência!`);
    pontos += 10;
}
console.log(`Experiência total: ${pontos}`);