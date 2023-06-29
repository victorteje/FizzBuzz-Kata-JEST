const { fizzBuzz } = require('./fizzBuzz');

describe('FizzBuzz', () => {
    test('should return FizzBuzz', () => {
        let n = 15;
        expect(fizzBuzz(n)).toBe("FizzBuzz");
    });
    test('should return Fizz', () => {
        let n = 3;
        expect(fizzBuzz(n)).toBe("Fizz");
    });
    test('should return Buzz', () => {
        let n = 5;
        expect(fizzBuzz(n)).toBe("Buzz");
    });
    test('should return 1', () => {
        let n = 1;
        expect(fizzBuzz(n)).toBe(1);
    });
});