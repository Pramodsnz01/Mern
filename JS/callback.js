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

const printStd = (value)=>{
    console.log(`
        Name: ${value.name}
        Score: ${value.scoreObt}
        *******************************
        `)
        return
}
//forEach has no return type
students.forEach(printStd);


//map function always returns something
let result = students.map((value, index) => {
    return index
});
console.log(result)
