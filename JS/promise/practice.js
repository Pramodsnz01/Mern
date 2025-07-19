const promise1 = new Promise(function(res, rej){
    setTimeout(() => {
        console.log("I am Async");
        res()
    }, 1000);
})

promise1.then(function(){
    console.log("Consumed");
    
})