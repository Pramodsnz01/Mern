// const foo = ()=>{
//     console.log(" i am foo")
//     return "resolved"
// }
// const bar = ()=>{
//     console.log(" i am bar")
//     console.log(" i received '"+arg+'" from outside")
//     }



// const func1 = (cb) => {
//     console.log("i am func 1")

//     const func3 = (cb1) => {
//         console.log("I am func 3")

//         const func4 = (cb2) => {
//             console.log("I am func 4")

//             const func5 = () => {
//                 console.log("I am func 5")
//             }
//             cb2(func5)
//         }

//         cb1(func4)
//     }
//     cb(func3)
// }

// const func2 = (cb) => {
//     console.log("I am func 2")

// }

// func1(func2)


const func1 = (cb)=>{
    console.log("func1")

    const func3 = (cb3)=>{
        console.log("func3")

        const func5 = ()=>{
            console.log("func5")
        }
        cb3(func5)
    }

    cb(func3)
}
const func2 = (cb1)=>{
    console.log("func2")

    const func4 = (cb4)=>{
        console.log("func4")

        cb4()
    }
    cb1(func4)
}

func1(func2)
