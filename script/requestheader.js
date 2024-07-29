
let options = {
    method : "POST",
    headers:{
        "Content-type" : "application/json"
    },
    body: JSON.stringify({
        title: "Harry",
        body: 'bhai',
        userId: 1100,
    }),
}

fetch('https://jsonplaceholder.typicode.com/posts',options)
    .then((response) => response.json())
    .then((json) => console.log(json));