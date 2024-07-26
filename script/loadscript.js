//write a 

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = src
    script.onload = () => {
    resolve(src)
    }
    document.head.append(script)
    })
    }

    //using async
    // const main2 = async() => {
    //     console.log(new Date().getMilliseconds);
    // let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");console.log(a);
    //     console.log(new Date().getMilliseconds);
    // }
    // main2()


    //using .then
    // let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");console.log(a);
    // a.then((value) => { console.log(value)});

    //create a promise which reject after 3 seconds use an async/await to get its value.use a try catch to handle its error
    // let p  = () => {
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             reject(new Error("Please this is not acceptable"))
    //         },3000)
    //     })
    // }

    // let a = async() => {
    //     try{
    //         let c = await p()
    //         console.log(c)
    //     }
    //     catch(err)
    //     {
    //         console.log("This error has been handled")

    //     }
    // }


    //write a program using promise.all() inside an async/await to await 3  promises.compare its results with the case where we await these promises one by one

    let p1 = async ()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(10)
            },2000)
        })
    }
    let p2 = async () =>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(20)
            },1000)
        })
    }
    let p3 = async () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(30)
            },3000)
        })
    }

    const run = async () => {
        console.time("run")
        //let a1 = await p1();
        //console.log(a1);
        //let a2 = await p2();
        //console.log(a2);
        //let a3 = await p3(); 

        let a1 = p1();
        let a2 = p2();
        let a3 = p3();
        let a1a2a3 = await Promise.all(a1,a2,a3) 
        console.log(a1,a2,a3);
        console.timeEnd("run")
    }

    run();



