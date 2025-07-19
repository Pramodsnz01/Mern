const User = require("./User")

class Admin extends User {
    role = "user";
    constructor(obj) {
        super(obj)
        console.log("I am admin")
    }
}

module.exports = Admin