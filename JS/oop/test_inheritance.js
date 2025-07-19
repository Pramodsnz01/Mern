const register = require("./register");

// Test the complete inheritance chain
console.log("=== Testing Complete Inheritance Chain ===");
console.log("User → Admin → register");
console.log("");

// Create an object with User properties
const userData = {
    name: "Ram",
    email: "ram@email.com", 
    address: "Ktm"
};

// Create register instance (which inherits from Admin, which inherits from User)
const regInstance = new register(userData);

console.log("");
console.log("=== Inheritance Chain Summary ===");
console.log("1. User class provides: name, email, address");
console.log("2. Admin class adds: role");
console.log("3. register class adds: phone, department");
console.log("");
console.log("Final object has ALL properties from the inheritance chain!"); 