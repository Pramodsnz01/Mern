// promish handlling

// const myPromise = new Promsie((resolve, reject)=>{
//     resolve("Hello there")
// })
// myPromise()
// .then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.log(e)
// })
// .finally(()=>{
//     console.log("I am finally")
// })


// console.log("last line")
/**
const myfunc = () => {
    return new Promise((res, rej) => {
        res("hello world")
    })
}
myfunc()
    .then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e)
    })
         */

const func = (x) =>{
    return new Promise((res, rej)=>{
        console.log("I am func ")
        if(x){
            res({message: "I am resolve of func "})
        }else{
            rej({error: "I am reject of func " })
        }
    })
}
const func1 = (x) =>{
    return new Promise((res, rej)=>{
        console.log("I am func 1")
        if(x){
            res({message: "I am resolve of func 1"})
        }else{
            rej({error: "I am reject of func 1" })
        }
    })
}
const func2 = (x) =>{
    return new Promise((res, rej)=>{
        console.log("I am func 2")
        if(x){
            res({message: "I am resolve of func 2"})
        }else{
            rej({error: "I am reject of func 1" })
        }
    })
}
const func3 = (x) =>{
    return new Promise((res, rej)=>{
        console.log("I am func 3")
        if(x){
            res({message: "I am resolve of func 3"})
        }else{
            rej({error: "I am reject of func 1" })
        }
    })
}

func(true)
.then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e)
    })
func1(true)
.then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e)
    })
func2( )
.then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e)
    })
func3(true)
.then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e)
    })