# Lighthouse Labs | Data Fetching and Other Side Effects

* [ ] Side-Effects
* [ ] React Hooks
* [ ] The `useEffect` Hook
* [ ] Data Fetching Example(s)

## Pure Functions

Pure functions are functional programming concept.

1. Identical return value given identical arguments.
2. No side effects.

## React Hooks

React hooks are functions that allow us to tap into React features.

* `useState` - storing values in a component that might change - this change will be noticed for re-render
* `useEffect` - a way we can carefully and intentionally handle code that engages in side effects

### Common Side Effects in React Include...

* Timers
* Subscriptions
* Direct updates to the DOM
* Fetching data from an external resource (Ajax)
* `console.log`

```js

// import useEffect (just like useState)

// you can only call useEffect inside of a React function
// you can only call useEffect inside your components

// Envoke React's useEffect hook
useEffect(() => {

    // Your side-effects go here...

    // Optionally, if you need to do any cleanup when the
    // component is unmounted (removed from the page...)
    return () => {

        // Any clean-up for this side effect
        // can go in this returned function.

    };

}, []); // Dependencies array!

// An empty array as the second argument means that this side-effect function...
// will only execute at the end of the very FIRST render of this component.
// It will NOT run subsequent times as re-renders occur.
```

## React Hook Rules

1. Only call Hooks in the top level
2. Only call Hooks inside of React functions (components)
