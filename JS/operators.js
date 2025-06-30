// 1. Arithmetic Operators
// Used for mathematical calculations
let a = 10;
let b = 5;
console.log(a + b);  // Addition: 15
console.log(a - b);  // Subtraction: 5
console.log(a * b);  // Multiplication: 50
console.log(a / b);  // Division: 2
console.log(a % b);  // Modulus: 0
console.log(a ** b); // Exponentiation: 100000

// 2. Assignment Operators
// Used to assign values
let x = 5;    // Simple assignment
x += 3;       // x = x + 3
x -= 2;       // x = x - 2
x *= 4;       // x = x * 4
x /= 2;       // x = x / 2
x %= 3;       // x = x % 3

// 3. Comparison Operators
// Used to compare values
console.log(5 == '5');   // Equal to (value): true
console.log(5 === '5');  // Strict equal (value and type): false
console.log(5 != '6');   // Not equal to: true
console.log(5 !== '5');  // Strict not equal: true
console.log(5 > 3);      // Greater than: true
console.log(5 >= 5);     // Greater than or equal to: true
console.log(3 < 5);      // Less than: true
console.log(3 <= 3);     // Less than or equal to: true

// 4. Logical Operators
// Used for logical operations
console.log(true && true);   // Logical AND: true
console.log(true || false);  // Logical OR: true
console.log(!true);          // Logical NOT: false

// 5. Increment/Decrement Operators
let count = 0;
count++;      // Post-increment
++count;      // Pre-increment
count--;      // Post-decrement
--count;      // Pre-decrement

// 6. String Operators
// Used for string concatenation
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);  // Concatenation: "Hello World"

// 7. Conditional (Ternary) Operator
// Shorthand for if-else
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";

// 8. Bitwise Operators
// Used for binary operations
console.log(5 & 3);   // Bitwise AND
console.log(5 | 3);   // Bitwise OR
console.log(5 ^ 3);   // Bitwise XOR
console.log(~5);      // Bitwise NOT
console.log(5 << 1);  // Left shift
console.log(5 >> 1);  // Right shift
console.log(5 >>> 1); // Unsigned right shift

// 9. Type Operators
console.log(typeof "Hello");     // Returns "string"
let obj = {};
console.log(obj instanceof Object);  // Returns true/false for object instances

// 10. Spread/Rest Operator
let arr = [1, 2, 3];
let newArr = [...arr];  // Spread operator
function sum(...nums) { // Rest operator
    return nums.reduce((a, b) => a + b);
}
