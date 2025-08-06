const prompt = require("prompt-sync")();

let jogos = ["Cod", "Minecraft", "Tlou", "Gow", "Terraria"];

jogos.push("Roblox");

console.log(`Jogo adicionado, ${jogos[jogos.length - 1]}`);

jogos[1] = "Mario";

console.log(`Minecraft foi substituido por ${jogos[1]}`);
