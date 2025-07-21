const promise1 = new Promise(function(res, rej){
    setTimeout(() => {
        console.log("I am Async");
        res()
    }, 1000);
})

promise1.then(function(){
    console.log("Consumed");
    
})

const prom2 = new Promise(function(res, rej){
    setTimeout(function(){
        res({username: "ram"})
    }, 2000);
})
prom2.then(function(user){
    console.log(user);
})

const prom3 = new Promise(function(res, rej){
    setTimeout(function(){
        let error = false
        if (!error) {
            res({username:"Hari", address:"Ktm"})
        }else{
            rej('Error: Something went wrong')
        }
    }, 3000);
})
// prom3.then((user)=>{
//     console.log(user);
//     return user.address
// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error);
    
// })

async function consProm3(){
    try{
        const response = await prom3
        console.log(response)
    }catch(error){
        console.log(error);
    }
}
consProm3()