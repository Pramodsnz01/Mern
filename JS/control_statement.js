// if-else
// else-if
// switch-case
// loop

// Decision making stmt

// if-else statement
// if(expression){
//     // code to be executed if expression is true
// }else{
//     // code to be executed if expression is false
// }

let age = 18;
if(age >= 18){
    console.log("You are an adult.");
}
else{
    console.log("You are a minor.");
}

//print the day if is a weekday or weekend or holiday
//consider if, day is sunday or saturday =>holiday
//if dayis friday => weekend
//any other day => weekday
let day = "tuesday";

// if(day === "sunday" || day === "saturday"){
//     console.log("Holiday");
// }else{
//     if(day === "friday"){
//         console.log("Weekend");
//     } else {
//         console.log("Weekday");
//     }
// } 

// using else-if statement : used for speed
if(day === "sunday" || day === "saturday"){
    console.log("Holiday");
}else if(day === "friday"){
    console.log("Weekend");
}   else{
    console.log("Weekday");
}

//switch-case statement
/*
switch(day){
    case "sunday":
    case "saturday":
        console.log("Holiday");
        break;
    case "friday":
        console.log("Weekend");
        break;
    default:
        console.log("Weekday");
        break;
} */
 


//get the division and percentage of a student who scored 350 out of 500
//the division is based on the percentage
// if percentage >= 80 => distinction
//if percentage >= 60 => first division
//if percentage >= 50 => second division
//if percentage >= 40 => third division
//if percentage < 40 => failed


let marks = 350;
let totalMarks = 500;
let percentage = (marks / totalMarks) * 100;
console.log("Percentage: " + percentage + "%");
if(percentage >= 80){
    console.log("Distinction");
}
else if(percentage >= 60 || percentage <= 79){
    console.log("First Division");
}else if(percentage >= 45 || percentage <= 59){
    console.log("Second Division"); 
}else if(percentage >= 32 || percentage <= 44){
    console.log("Third Division");
}
else if(percentage < 32){
    console.log("Sorry, you failed.");
}

//another way
let percentag = 350/500 * 100;
let division = null;
if(percentag >= 80){
    division = "Distinction";
}else if(percentag >= 60){
    division = "First Division";
}else if(percentag >= 50){
    division = "Second Division";   
}else if(percentag >= 40){
    division = "Third Division";    
}
else{
    division = "Failed";
}

console.log("Percentage: " + percentag + "%");
console.log("Division: " + division);