const fizzBuzz = () => {

    let i = 1;
    
    for (i; i <= 15; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
            // return "Fizzbuzz";
        }

        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        
        else if (i % 5 == 0) {
            console.log("Buzz");
        }

        else {
            console.log(i);
        }
    }
}

fizzBuzz();

// module.exports = { fizzBuzz };