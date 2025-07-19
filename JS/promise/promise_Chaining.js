const func = (x) =>{
    return new Promise((res, rej)=>{
        console.log("I am func ")
        if(x){
            res(func1 = (x) =>{
                return new Promise((res, rej)=>{
                    console.log("I am func 1")
                    if(x){
                        res(func2 = (x) =>{
                            return new Promise((res, rej)=>{
                                console.log("I am func 2")
                                if(x){
                                    res(func3 = (x) =>{
                                        return new Promise((res, rej)=>{
                                            console.log("I am func 3")
                                            if(x){
                                                res({message: "I am resolve of func 3"})
                                            }else{
                                                rej({error: "I am reject of func 1" })
                                            }
                                        })
                                    })
                                }else{
                                    rej({error: "I am reject of func 1" })
                                }
                            })
                        })
                    }else{
                        rej({error: "I am reject of func 1" })
                    }
                })
            })
        }else{
            rej({error: "I am reject of func " })
        }
    })
}




func(true)
.then((data) => {
        console.log(data)
        return func1(true)
    })
.then((data1) => {
        console.log(data1)
        return func2(true)
    })
.then((data2) => {
        console.log(data2)
    })
    .catch((e) => {
        console.log(e)
        return func3()
    }) 
.then((data3) => {
        console.log(data3) 
    }) 
    .catch((e)=>{
        console.log(e)
    })