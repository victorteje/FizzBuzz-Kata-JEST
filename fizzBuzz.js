const fizzBuzz = (n) => {
   
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            return "FizzBuzz";
        }

        else if (i % 3 === 0) {
            console.log("Fizz");
            // return "Fizz";
        }
        
        else if (i % 5 === 0) {
            console.log("Buzz");
            // return "Buzz";
        }

        else {
            console.log(i);
            // return i;
        }
    }
}

fizzBuzz(15);

module.exports = { fizzBuzz };