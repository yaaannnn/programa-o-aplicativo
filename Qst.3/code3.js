const prompt = require("prompt-sync")();

let funcionarios = [];
let folhatotal = 0;
let mediasalarial = 0;

for (let i = 1; i <= 20; i++){
    let codigo = prompt(`Digite o código do ${i}° Funcionário: `)
    let salario = Number(prompt(`Digite o salario do ${i}° FUncionário: `));
    console.log("----------------------------------------------------------");
    funcionarios.push({codigo, salario});
    folhatotal += salario;
}
mediasalarial = folhatotal / funcionarios.length;
console.log(`Valor da folha de pagamento: ${folhatotal.toFixed(2)}`);
console.log(`Media Salarial: ${mediasalarial.toFixed(2)}`);


//console.log(`Codigo 1° Func.: ${funcionarios[0].codigo}, Sálario 1° Func.: ${funcionarios[0].salario}`);