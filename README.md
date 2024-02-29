# Lighthouse Labs | Data Fetching and Other Side Effects

* [X] Pure Functions
* [X] Side-Effects
* [X] React Hooks
* [X] The `useEffect` Hook

## Pure Functions

Typically in JavaScript, we're used to procedural programming.
* Blocks, scope, variables
* `if`, `while`, `for`

In functional programming, most/all functions should be ***pure*** in nature.

A pure function abides by two major rules:
1. Identical return value given identical arguments.
2. No side effects.

## Side Effects

If a function mutates a variable or value outside of its own blocked scope, it is said to have side effect. Common cases include:

* Performing standard input-output operations
* Updating the value of a variable defined outside of the function
* Mutating an argument of the function that was passed-in by-reference
* Envoking a separate function that itself has side effects

## React Hooks

What hooks have we used so far?
* `useState`
* `useReducer`

There are a couple of rules we should keep in-mind when using React hooks:
1. Only call Hooks at the top level of your function/component
2. Only call Hooks in React functions

## The `useEffect` Hook

This is a React Hook meant to help facilitate "Side Effects" in our React applications.

If you're working on a component and end up working on something that'd make your function "impure," consider using the `useEffect` hook.

Common use cases in React:
* Timers (`setInterval` or `setTimeout`)
* Setting up a subscription
* Direct updates to the DOM (esp. outside of your component)
* Fetching data from an external resource (API endpoints)
* Console logging

## Syntax

```js
import { useEffect } from 'react';

// ...inside of a React component...

// Envoke the useEffect hook supplied from React
useEffect(() => {
    // In our callback belongs our side-effect code.

    // Optionally you can return a "clean-up" function!
    return () => {};
}, []); // "Dependencies Array" -> determines how often our side-effect code runs.

// 1. If no dependencies array is provided, the side-effect runs EVERY render
// 2. If the dependencies array is empty, the side-effect runs ONCE on first render
// 3. If any values in the dependencies array change, the side effect runs again
```
