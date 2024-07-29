const a =  async(text) => {
    return new Promise((resoleve,reject) => {
        setTimeout(() => {
            resolve(text)
        },2000)
    })
}

(
    async () => {
        let text = await a("Hello")
        console.log(text)
        text = await a("World")
        console.log(text)
    }

)()