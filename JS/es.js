/*
ES in JS refers to "ECMAScript," which is the standardized scripting language specification that JavaScript implements. ECMAScript (often abbreviated as ES) defines the core features and syntax of JavaScript.

Major versions of ECMAScript include:
- ES5 (ECMAScript 5, released in 2009): Introduced features like strict mode, Array methods (forEach, map, filter), and JSON support.
- ES6 (ECMAScript 2015): A major update that added let/const, arrow functions, classes, template literals, destructuring, promises, modules (import/export), and much more.
- Later versions (ES7/ES2016, ES8/ES2017, etc.): Introduced features like async/await, Object.entries, Object.values, and many other improvements.

When people refer to "ES6" or "ES2015+", they are talking about these new features and syntax improvements in JavaScript.

Example (ES6 features):
*/
const greet = (name = "World") => {
    console.log(`Hello, ${name}!`);
};

greet(); // Output: Hello, World!
greet("ECMAScript"); // Output: Hello, ECMAScript!
