const { miniMaxSum,
    totalOfArray,
    findMinNum,
    findMaxNum,
    findEvenEls,
    findOddEls } = require('./utils')


test('miniMaxSum([1, 2, 3, 4, 5]) to equal [10, 14]', () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
});

test('miniMaxSum([1, 3, 5, 7, 9]) to equal [16, 24]', () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).toEqual([16, 24]);
})

test('totalOfArray([1, 2, 3, 4, 5]) to equal 15', () => {
    expect(totalOfArray([1, 2, 3, 4, 5])).toBe(15);
});

test('totalOfArray([1, 3, 5, 7, 9]) to equal 13', () => {
    expect(totalOfArray([1, 3, 5, 7, 9])).toBe(25);
})

test('findMinNum([3, 2, 1, 4, 5]) to equal 1', () => {
    expect(findMinNum([3, 2, 1, 4, 5])).toBe(1);
});

test('findMinNum([2, 3, 5, 7, 9]) to equal 2', () => {
    expect(findMinNum([2, 3, 5, 7, 9])).toBe(2);
})

test('findMaxNum([12, 2, 9, 4, 5]) to equal 12', () => {
    expect(findMaxNum([12, 2, 9, 4, 5])).toBe(12);
});

test('findMaxNum([1, 3, 53, 7, 9]) to equal 53', () => {
    expect(findMaxNum([1, 3, 53, 7, 9])).toBe(53);
})

test('findEvenEls([12, 2, 9, 4, 5]) to equal [12, 2, 4]', () => {
    expect(findEvenEls([12, 2, 9, 4, 5])).toEqual([12, 2, 4]);
});

test('findEvenEls([1, 6, 53, 8, 9]) to equal [6, 8]', () => {
    expect(findEvenEls([1, 6, 53, 8, 9])).toEqual([6, 8]);
})

test('findOddEls([12, 2, 9, 4, 5]) to equal [9, 5]', () => {
    expect(findOddEls([12, 2, 9, 4, 5])).toEqual([9, 5]);
});

test('findOddEls([1, 3, 53, 7, 9]) to equal [1, 3, 53, 7, 9]', () => {
    expect(findOddEls([1, 3, 53, 7, 9])).toEqual([1, 3, 53, 7, 9]);
})