const fizzBuzz = () => {
    const n = [];

    for (let i = 0; i<= 14; i++) {
        n[i] = i + 1;

        if (n[i] % 3 === 0 && n[i] % 5 === 0) {
            console.log("FizzBuzz");
            n[i] = "FizzBuzz";
        }

        else if (n[i] % 3 === 0) {
            console.log("Fizz");
            n[i] = "Fizz";
        }
        
        else if (n[i] % 5 === 0) {
            console.log("Buzz");
            n[i] = "Buzz";
        }

        else {
            console.log(n[i]);
        } 
    }
    return n;
}

fizzBuzz ();

module.exports = { fizzBuzz };
