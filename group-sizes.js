const prompt = require('prompt-sync')({sigint: true});

let classSize = Number(prompt("How many Students are in the class: "));


if (classSize % 3 === 0)
{
    console.log(`You will have ${classSize / 3} groups of 3.`);
} else if (classSize % 3 === 2)
{
    console.log(`You will have ${(classSize - 2) / 3} groups of 3 and 1 group of 2.`);
} else if (classSize % 3 === 1)
{
    console.log(`You will have ${(classSize - 4) / 3} groups of 3 and 2 groups of 2.`);
}




//need groups of 3 or 2, not 1.

// if classSize % 3 = 0, we're good for full groups
// if classSize % 3 > 0 we need a small groups:
// if classSize % 3 = 1 pull out two groups of 2
// if classSize % 3 = 2 pull out one group of 2




 
