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



// *** PREVIOUS VERSION ***

// const { fizzBuzz } = require('./fizzBuzz');

// describe('FizzBuzz', () => {
//     test('should return FizzBuzz', () => {
//         let n = 15;
//         expect(fizzBuzz(n)).toBe("FizzBuzz");
//     });
//     test('should return Fizz', () => {
//         let n = 3;
//         expect(fizzBuzz(n)).toBe("Fizz");
//     });
//     test('should return Buzz', () => {
//         let n = 5;
//         expect(fizzBuzz(n)).toBe("Buzz");
//     });
//     test('should return 1', () => {
//         let n = 1;
//         expect(fizzBuzz(n)).toBe(1);
//     });
// });