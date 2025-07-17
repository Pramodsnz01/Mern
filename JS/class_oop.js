class User{
    name;
    email;
    address;
   #role="user" //private

   constructor({name, email, address}) {}
}
const userObj = new User({address:" Bkt", name:"hare"})
// userObj.name = "Hari"
// userObj.email = "Hari@ims.com"
// userObj.address="Bkt"

console.log(userObj)