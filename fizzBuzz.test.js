const { fizzBuzz } = require('./fizzBuzz');

describe('FizzBuzz', () => {
    test('should return "Fizz" for multiples of 3', () => {
        expect(fizzBuzz()[2]).toBe("Fizz");
    });
    test('should return "Buzz" for multiples of 5', () => {
        expect(fizzBuzz()[4]).toBe("Buzz");
    });
    test('should return "FizzBuzz" for multiples of both 3 and 5', () => {
        expect(fizzBuzz()[14]).toBe("FizzBuzz");
    });
    test('should return a number if neither a multiple of 3 nor 5', () => {
        expect(fizzBuzz()[0]).toBe(1);
    });
});
