/**
 * What is a pure function?
 * 
 * 1. Identical return value given idential parameters
 * 2. No side-effects
 */

// We want to write a function that can sum a couple of numbers.


function addTwoNums(num1, num2) {
    let sum = 0;
    sum += Number(num1) + Number(num2);
    return sum;
}

console.log(
    addTwoNums(5, 6), // 11
    addTwoNums(5, 6)  // 
);

// Examples of side-effects:
// * Updating a variables defined elsewhere
// * Performing input/output operations process.argv / console.log
// * Mutating a parameter (don't manipulate an array passed in, etc.)
// * Envoking an external function that has side-effects
