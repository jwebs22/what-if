const prompt = require('prompt-sync')({sigint: true});

let age = Number(prompt("Please enter your age: "));

if (age < 16)
{
    console.log("You can't drive.");
} else if (age <= 17)
{
    console.log("You can drive but not rent a car.");
} else if (age <= 24)
{
    console.log("You can vote but not rent a car.");
} else
{
    console.log("You can pretty much do anything.");
}
