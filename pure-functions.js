/**
 * Pure Functions
 * 
 * Used in functional programming.
 * 
 * 1. Identical return value given identical parameters
 * 2. No side-effects
 */

function addTwoNums(num1, num2) {
    let sum = 0;
    sum += Number(num1) + Number(num2);
    return sum;
}

console.log(
    addTwoNums(5, 6), // 11
    addTwoNums(5, 6), // 11
    addTwoNums(3, 7)  // 10
);

// Examples of side-effects:
// * Performing input/output (process.argv or console.log)
// * Mutating a parameter
// * Updating a variable defined elsewhere (outside)
// * Envoking external function that itself has side-effects
