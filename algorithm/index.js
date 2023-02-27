var readline = require('readline');

var rl = readline.createInterface(
		process.stdin, process.stdout);
let intros = `Please input five positive integers follow format
Input format:
A single line of five space-separated intergrs \n`;
rl.setPrompt(intros);
rl.prompt();
rl.on('line', (numbers) => {
	console.log(`The numbers has input: ${numbers}`);
	rl.close();
});
