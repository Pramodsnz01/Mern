class User{
    name;
    email;
    address;
   #role="user" //private

   constructor({name, email, address}) {
    this.name=name
    this.email= email
    this.address= address
   }
}

module.exports = User