const { miniMaxSum, totalOfArray } = require('./utils')


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