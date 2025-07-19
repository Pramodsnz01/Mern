const Admin = require("./Admin")

class register extends Admin{
    phone;
    department;
    
    constructor(obj){
        super(obj) 
        this.name = "Hari" // Must call super() first
        this.address = "Ktm"
        this.email = "har@gmail.com"
        this.phone = "980558889"
        this.department = "IT" 
      
        console.log(this);
    }
}
const Register = new register(this)

module.exports = register 