const prompt = require("prompt-sync")();

for (let i = 2; i <= 9; i++) {
    console.log(`Tabuada do ${i}:`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); 
}
