const allProducts = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        discount: 10
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        discount: 20
    },
    
]

// const getDiscountedPrice = (price, discount) => {
//     return price - (price * discount / 100);
// }

//one line function
/* const getDiscountedPrice = (price, discount) => ((price*discount)/100);

const getAfterDiscountPrice = (price, disAmt) => (price - disAmt); 

for(let prod of allProducts){
    prod.disAmt = getDiscountedPrice(prod.price, prod.discount);
    prod.afterDiscountPrice = getAfterDiscountPrice(prod.price, allProducts[0].disAmt);
    console.log(prod);
}

console.log(allProducts);


*/
const students = [
    {
        name: "Alice Johnson",
        scoreObt: 450
    },
    {
        name: "Bob Smith",
        scoreObt: 380
    },
    {
        name: "Carol Davis",
        scoreObt: 420
    },
    {
        name: "David Wilson",
        scoreObt: 395
    },
    {
        name: "Emma Brown",
        scoreObt: 465
    },
    {
        name: "Frank Miller",
        scoreObt: 340
    },
    {
        name: "Grace Taylor",
        scoreObt: 410
    },
    {
        name: "Henry Anderson",
        scoreObt: 375
    },
    {
        name: "Ivy Martinez",
        scoreObt: 430
    },
    {
        name: "Jack Thompson",
        scoreObt: 390
    }
];

const getPercentage = (scoreObt, totalMarks) => ((scoreObt/totalMarks)*100);

for(let student of students){
    student.percentage = getPercentage(student.scoreObt, 500);
    console.log(student);

    if(student.percentage >= 80){
        student.division = "Distinction";
    }else if(student.percentage >= 60){
        student.division = "First Division";
    }else if(student.percentage >= 45){
        student.division = "Second Division";
    }else if(student.percentage >= 32){
        student.division = "Third Division";
    }else{
        student.division = "Fail";
    }
}
console.log(students);




