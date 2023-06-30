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



// *** PREVIOUS VERSION ***

// const fizzBuzz = (n) => {
   
//     for (let i = 1; i <= n; i++) {

//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//             return "FizzBuzz";
//         }

//         else if (i % 3 === 0) {
//             console.log("Fizz");
//             return "Fizz";
//         }
        
//         else if (i % 5 === 0) {
//             console.log("Buzz");
//             return "Buzz";
//         }

//         else {
//             console.log(i);
//             return i;
//         }
//     }
// }

// fizzBuzz(15);

// module.exports = { fizzBuzz };