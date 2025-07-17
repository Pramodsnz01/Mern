let allUsers = [
    {
      _id: 1,
      fullName: "Sandesh Bhattarai",
      email: "sandesh@broadwayinfosys.com",
      address: "Kathmandu",
      phone: 9876543210,
      password: "admin123#",
    },
    {
      _id: 2,
      fullName: "User One",
      email: "userone@broadwayinfosys.com",
      address: "Lalitpur",
      phone: 9876654698,
      password: "asdfasidofuh#",
    },
    {
      _id: 3,
      fullName: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      address: "Pokhara",
      phone: 9801234567,
      password: "passAarav#1",
    },
    {
      _id: 4,
      fullName: "Sita Karki",
      email: "sita.karki@example.com",
      address: "Biratnagar",
      phone: 9812345678,
      password: "sitaPass!2",
    },
    {
      _id: 5,
      fullName: "Ramesh Thapa",
      email: "ramesh.thapa@example.com",
      address: "Butwal",
      phone: 9823456789,
      password: "ramThapa@3",
    },
    {
      _id: 6,
      fullName: "Priya Shrestha",
      email: "priya.shrestha@example.com",
      address: "Bhaktapur",
      phone: 9834567890,
      password: "priyaS#4",
    },
    {
      _id: 7,
      fullName: "Bikash Gurung",
      email: "bikash.gurung@example.com",
      address: "Dharan",
      phone: 9845678901,
      password: "bikashGurung5$",
    },
    {
      _id: 8,
      fullName: "Sunita Lama",
      email: "sunita.lama@example.com",
      address: "Hetauda",
      phone: 9856789012,
      password: "sunitaLama6*",
    },
    {
      _id: 9,
      fullName: "Manish Joshi",
      email: "manish.joshi@example.com",
      address: "Nepalgunj",
      phone: 9867890123,
      password: "manishJoshi7@",
    },
    {
      _id: 10,
      fullName: "Kriti Singh",
      email: "kriti.singh@example.com",
      address: "Janakpur",
      phone: 9878901234,
      password: "kritiSingh8#",
    },
    {
      _id: 11,
      fullName: "Deepak Bhandari",
      email: "deepak.bhandari@example.com",
      address: "Dhangadhi",
      phone: 9889012345,
      password: "deepakB9!",
    },
    {
      _id: 12,
      fullName: "Anjali Rai",
      email: "anjali.rai@example.com",
      address: "Itahari",
      phone: 9890123456,
      password: "anjaliRai10$",
    },
  ];
  // using map or forEach only find all the users from kathmandu in a variable named as usersFromKtm


// Using forEach
// let usersFromKtm = [];
// allUsers.forEach(user => {
//     if (user.address === "Kathmandu") {
//         usersFromKtm.push(user);
//     }
// });
// console.log(usersFromKtm);
 

// const usersFromKtm =  allUsers.map((user) =>{
//   if(user.address === 'Kathmandu'){
//     usersFromKtm.push(user)
//   }
// })
// console.log(usersFromKtm)

/** 
//filter() considers only boolean true values
const usersFromKtm = allUsers.filter((user) => (user.address === 'Kathmandu'))
console.log(usersFromKtm)

*/

/**

//reduce()
const nums = [3,6,3,8,7]

// let max =  null;
let max =  nums.reduce((acc, cur) => (acc>cur) ? acc:cur)
// for (let i =0 ; i < nums.length; i++){
//   if (nums[i]> max){
//     max = nums[i]
//   }
// }


console.log(max)
 */

const nums = [3,6,3,8,7]