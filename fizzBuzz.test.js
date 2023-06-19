const { test } = require('node:test');
const { fizzBuzz } = require('./fizzBuzz');

test('Return Fizz if number is a mutiplier of 3', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
});

test('Return Buzz if number is a mutiplier of 5', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
});

test('Return FizzBuzz if number is a mutiplier of both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});
