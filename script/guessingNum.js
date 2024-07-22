let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;

while(inp != 0)
{
    score = score - 1;
    inp = prompt("Enter the number : ");
    inp = Number.parseInt(inp);
    if(inp == a)
    {
        console.log("Congratulation! you guess the correct number.");
        console.log(`you guess the acutal number in ${100-score} chances.`);
    }
    else if(inp > a && inp < 100)
    {
        console.log("your number is greater than the actual number.");
    }
    else if(inp < a && inp > 0)
    {
        console.log("your number is smaller than the actual number.");
    }
    else{
        console.log("Enter number between 1 to 100 ");
    }
}