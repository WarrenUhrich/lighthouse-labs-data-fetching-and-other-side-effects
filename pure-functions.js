/**
 * Pure functions...
 * 
 * 1. Identical return given identical params/arguments
 * 2. No side-effects
 */

function addTwoNums(num1, num2) {
    let sum = 0;
    sum += Number(num1) + Number(num2);
    return sum;
}

console.log(
    addTwoNums(1, 3), // 4
    addTwoNums(1, 3)  // 4
);

// Examples of side effects include:
// * Updating variables / values defined elsewhere
// * Performing input/output operations (process.argv) / console.log
// * Mutating a parameter directly (don't manipulate an array or object passed-in)
// * Envoking an external function that has side-effects