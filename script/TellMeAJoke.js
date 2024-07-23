let jokes = [
           
            "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
        
            "Why did the JavaScript heap close shop?",
            
        
            "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
           
        
            "Why do programmers wear glasses?",
            
       
            "Why are modern programming languages so materialistic?",

            ".NET developers are picky when it comes to food.",
            
            "How many programmers does it take to screw in a light bulb?",
             
            "\"We messed up the keming again guys.\"",
            
            "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
            
            "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
            
    ];

    let index = Math.floor(Math.random()*(jokes.length - 1));
    console.log(index);
    joke.innerHTML = jokes[index];