setInterval(() => {
    
    let date = new Date();
    let options = {
        weekday:"long",year : "numeric",month: "short",
        day : "numeric",hour : "2-digit",minute : "2-digit",

    }
    let d = date.toLocaleDateString("en-us",options);
    container.innerHTML = d;
},1000);