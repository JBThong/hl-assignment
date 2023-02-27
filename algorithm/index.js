var readline = require('readline');
const { miniMaxSum } = require('./utils')

var rl = readline.createInterface(
		process.stdin, process.stdout);
let intros = `Please input five positive integers follow format
Input format:
A single line of five space-separated intergrs \n`;
rl.setPrompt(intros);
rl.prompt();

rl.on('line', (numbers) => {
	main(numbers)
	rl.close();
});

function main(numbers) {
	const arrNums = numbers.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
	let [min, max] = miniMaxSum(arrNums);
	console.log(`minSum and maxSum: ${min} ${max}`)
}
