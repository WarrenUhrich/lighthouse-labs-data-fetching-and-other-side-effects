# Lighthouse Labs | Data Fetching and Other Side Effects

* [X] Pure Functions
* [X] Side-Effects
* [X] React Hooks
* [ ] The `useEffect` Hook

## Pure Functions

* Modular (often focusing on a specific task)

1. Identical arguments... the return must also be identical
2. No side-effects

```JavaScript
function sum(x, y) {
    return Number(x) + Number(y);
}

function greeting(name) {
    return `Hello, ${name}!`;
}
```

## Side-Effects

* I/O operations `console.log()`
* Referencing or mutating variables / values from outside the function
* Mutating arguments passed in by-reference
* Envoking an impure function in your function

```JavaScript
// IMPURE functions!

const addedNum = 2;
function addTwo(x) {
    return Number(x) + addedNum; // References something from outside...
}

function greeting(name) {
    console.log(`Hello, ${name}!`);
}
```

## React Hooks

A function available to use that "hooks" into React features (example: state.)

### React Hook Rules

1. Has to have the prefix `use` in the name
2. Must be envoked only in React functions (components)
3. Only call hooks at the top level of your functions

## `useEffect`

Any time we want to deal with side-effects in our React components, we'll make use of `useEffect`. What are common "React" side-effects?

* Timers (`setInterval` or `setTimeout`)
* Direct updates in the DOM
* Fetching data from an external resource
* Console logging

```JavaScript
const [state, setState] = useState('default');

// Run your function after every render
useEffect(() => {});

// Run your function only after the FIRST render
useEffect(() => {}, []);

// Run your function only when a dependency changes
useEffect(() => {}, [props, state]);

// Final layer...
useEffect(() => {

    // The return is a cleanup function
    return () => {
        
    };

}, []);
```
