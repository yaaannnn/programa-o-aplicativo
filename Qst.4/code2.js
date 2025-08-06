const prompt = require("prompt-sync")();

let notas = [];

for (let i = 1; i <= 2; i++) {
    let nota_aluno = Number(prompt(`Qual a nota do ${i}° Aluno: `));
    notas.push({nota: nota_aluno, numero: i});
}

console.log("\nAlunos com nota maior ou igual a 7.0:");
for (let i = 0; i < notas.length; i++) {
    if (notas[i].nota >= 7) {
        console.log(`Aluno ${notas[i].numero}: Nota ${notas[i].nota}`);
    }
}
