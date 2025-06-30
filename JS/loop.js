/*
let i = 0;

//do-while
do {
    console.log(i);
    i++;
}while (i <= 10 ); // The condition is false, but the block will execute once.
*/
/*

let num = 1;

do {
    if (num % 2 === 0) {
        console.log(num + " is even");
    }
    num++;
} while (num <= 20); 

//next logic
let i = 1;
do {
    console.log(i*2);
    i++;
}while (i <= 20); // The condition is false, but the block will execute once.


*/
/*
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// The condition is true, so the block will execute until the condition becomes false.

*/

/**
//for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

 */
/**
 * 
  1  2   3  4  5
  1  2   3  4  5
  1  2   3  4  5
  1  2   3  4  5
  1  2   3  4  5
  
  for (let i = 1; i <= 5; i++) { 
    for (let j = 1; j <= 5; j++) {
        console.log(j);
    }
    // Print a new line after each inner loop iteration
}



// Print 5 lines of: 1  2  3  4  5
for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 1; j <= 5; j++) {
        line += j + "  ";
    }
    console.log(line.trim());
    
}

*/






