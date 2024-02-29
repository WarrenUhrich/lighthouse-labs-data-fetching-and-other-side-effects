let sumValue = 0; // This is defined outside of our function.

const sum = (num1, num2) => {
    sumValue += num1 + num2; // We're working with an outside value — impure!
    return sumValue;
};

console.log(
    "sum(3, 4) =", sum(3, 4) // 7
);

console.log(
    "sum(600, -856) =", sum(600, -856)
);

console.log(
    "sum(15, 39) =", sum(15, 39)
);
console.log(
    "sum(15, 39) =", sum(15, 39)
);
console.log(
    "sum(15, 39) =", sum(15, 39)
);

const greeting = (name) => {
    console.log(`Hello, ${name}!`);
};

greeting('Alysha');
greeting('Alysha');
greeting('Matthew');
