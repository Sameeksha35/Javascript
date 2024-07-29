const a =  async(text,n) => {
    return new Promise((resoleve,reject) => {
        setTimeout(() => {
            resolve(text)
        },1000 * n)
    })
}

(
    async () => {
        let text = await a("I am resolving after 1 second",1)
        console.log(text)
        text = await a("I am resolving after 4 seconds",4)
        console.log(text)
    }

)()