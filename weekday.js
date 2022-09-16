const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number 1-7: "));

if (num === 1)
{
    console.log(`${num} is Monday`);
} else if (num === 2)
{
    console.log(`${num} is Tuesday`);
} else if (num === 3)
{
    console.log(`${num} is Wednesday`);
} else if (num === 4)
{
    console.log(`${num} is Thursday`);
} else if (num === 5)
{
    console.log(`${num} is Friday`);
} else if (num === 6)
{
    console.log(`${num} is Saturday`);
} else if (num === 7)
{
    console.log(`${num} is Sunday`);
} else 
{
   console.log(`Error, please enter a number 1-7`);
}

