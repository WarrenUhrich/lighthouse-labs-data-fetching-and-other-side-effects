# Lighthouse Labs | Data Fetching and Other Side Effects

* [ ] Pure Functions
* [ ] Side-Effects
* [ ] React Hooks
* [ ] The `useEffect` Hook

## React Hooks

What are React hooks!? They are functions that allow us to tap into React features. `useState` `useEffect`

### React Hook Rules

```js
const MyComponent = () => {
    const [count, setCount] = useState();

    return();
};
```

1. Only call hooks at the top level
2. Only call hooks in React function (components)

## What is `useEffect` ?

`useEffect` is React's way of letting us handle side-effects.

In-browser, what are some common side-effects?

* DOM manipulation
* `console.log`
* Fetching data from an external resource (Ajax)
* Timer (`setTimout`, `setInterval`)

```js

const MyComponent = () => {
    const [count, setCount] = useState(0);

    // We call the useEffect function,
    // we pass in a function as an argument.
    useEffect(() => {

        // Write your side-effect code here...
        // console.log('Count is now:', count);

        // Run cleanup on "unmount"
        return () => { // This function only runs when your component is removed from the page

        };

    }, []); // Optionally, you can pass a DEPENDENCY ARRAY

    // NO dependency array; your function runs EVER RENDER
    // EMPTY dependency array []; your function runs ONCE on mount
    // if you have state/values in the array; your function runs ONLY if/when they change

    return();
};

```