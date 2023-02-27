var readline = require('readline');
const { miniMaxSum,
	totalOfArray,
	findMinNum,
	findMaxNum,
	findEvenEls,
	findOddEls } = require('./utils')

var rl = readline.createInterface(process.stdin, process.stdout);

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
	console.log(`minSum and maxSum: ${min} ${max}`);

	let total = totalOfArray(arrNums);
	console.log(`Total of array: ${total}`);

	let minNum = findMinNum(arrNums);
	let maxNum = findMaxNum(arrNums);
	console.log(`Min number: ${minNum}`);
	console.log(`Max number: ${maxNum}`);

	let evenEls = findEvenEls(arrNums);
	let oddEls = findOddEls(arrNums);
	console.log(`Even numbers: ${evenEls}`);
	console.log(`Odd numbers: ${oddEls}`);
}
