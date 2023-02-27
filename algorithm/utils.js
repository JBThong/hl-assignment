/**
 * Returns minSum and maxSum of array.
 * 
 * @param {Array} arrNums An array input.
 * @returns {Array} [minSum, maxSum].
 * 
 */
function miniMaxSum(arrNums) {
    let minSum = 0 ;
    let maxSum = 0;
    sortedArray = arrNums.sort((a,b)=>{ return a-b });
    
	for (let i = 0 ; i < sortedArray.length - 1; i++){
        minSum += sortedArray[i];
        maxSum += sortedArray[i+1]
    }

	return [minSum, maxSum];
}

/**
 * Returns total of array.
 * 
 * @param {Array} arrNums An array input.
 * @returns {Number} Total of numbers in array.
 * 
 */
function totalOfArray(arrNums) {
    let sum = 0;
    arrNums.forEach(num => {
        sum += num;
    });

    return sum;
}

/**
 * Returns min number of array.
 * 
 * @param {Array} arrNums An array input.
 * @returns {Number} Min number array.
 * 
 */
function findMinNum(arrNums) {
    sortedArray = arrNums.sort((a,b)=>{ return a-b });

    return sortedArray[0];
}

/**
 * Returns max number of array.
 * 
 * @param {Array} arrNums An array input.
 * @returns {Number} Max number array.
 * 
 */
function findMaxNum(arrNums) {
    sortedArray = arrNums.sort((a,b)=>{ return a-b });

    return sortedArray[sortedArray.length - 1];
}

module.exports = {
    miniMaxSum,
    totalOfArray,
    findMinNum,
    findMaxNum,
}