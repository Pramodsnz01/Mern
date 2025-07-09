const printNum = (i) => {
    console.log(i);
    i++;
    if (i<=10){
        printNum(i);
    }
}
printNum(1); 
 