function User(_name, _email, _address, _phone) {
    this.name = _name
    this.email = _email
    this.address = _address
    // let phone = ""
    this.phone = _phone
}

User.prototype.setName = function (_name){
    this.name = _name
}


const userObj = new User("Ram", "ram@rmail.com", "ktm", 980558889)
// userObj.name = "Ram"
// userObj.email ="ad"
// userObj.address = "ktm"


console.log(userObj)