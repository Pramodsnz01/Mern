//function declaration

//method 1

// js hoisting is a process where js moves the function declaration to the top of the scope before code execution (begins with var and function declaration)
var a = 10;


function addTwoNumbers(a,b){
    //task definition
    let c = a+b;
    return c;
}

const result = addTwoNumbers(5,3);
console.log(result);

//method 2 (function is also a data type in js  )
const addTwoNumbers2 = function(a,b){
    let c = a+b;
    return c;
}
const result2 = addTwoNumbers2(5,3);
console.log(result2);

//method 3 (arrow function)
//limitations:
// 1. No 'this' binding - arrow functions don't have their own 'this' context
// 2. Cannot be used as constructors - cannot be called with 'new' keyword
// 3. No 'arguments' object - cannot access the arguments object
// 4. Cannot be used as methods in objects - 'this' will refer to global scope
// 5. No 'super' binding - cannot be used in class constructors
// 6. Cannot be hoisted - must be defined before use
 

//advantage: for single line of declaration
const addTwoNumbers3 = (a,b) => {
    let c = a+b;
    return c;
}
const result3 = addTwoNumbers3(5,3);
console.log(result3);



//function as an object
const calculator = {
    addTwoNumbers: function(a,b){
        let c = a+b;
        return c;
    },
    addTwoNumbers2: (a,b) => {
        let c = a+b;
        return c;
    },
    addTwoNumbers3(a,b) {
        let c = a+b;
        return c;
    }
}

console.log(calculator.addTwoNumbers(5,3));
console.log(calculator.addTwoNumbers2(5,3));
console.log(calculator.addTwoNumbers3(5,3));
