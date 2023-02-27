const { miniMaxSum } = require('./utils')


test('miniMaxSum([1, 2, 3, 4, 5]) to equal [10, 14]', () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
});

test('miniMaxSum([1, 3, 5, 7, 9]) to equal [16, 24]', () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).toEqual([16, 24]);
})