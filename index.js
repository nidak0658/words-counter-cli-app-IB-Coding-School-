#! /usr/bin/env node
import inquirer from "inquirer";
// Our setup is ready we can start now
console.log("Welcome to Letters and Words Counter App!");
let myLoop = true;
while (myLoop) {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'para',
            message: "Enter your paragraph to count letters and words in it!"
        },
        {
            type: 'list',
            name: 'ask',
            message: "What do you want to count in your paragraph?",
            choices: ["1. Letters", "2. Words", "3. Both Letters and Words"]
        },
    ]);
    let { para, ask } = userInput;
    if (para.length === 0)
        emptyInput();
    if (ask === "1. Letters")
        letterFun();
    if (ask === "2. Words")
        wordsFun();
    if (ask === "3. Both Letters and Words")
        both();
    function emptyInput() {
        console.log(`Your input is empty! please try again with a valid input.\n `);
    }
    function letterFun() {
        const lettersWithoutSpaces = para.replace(/\s/g, "");
        const letterCount = lettersWithoutSpaces.length;
        console.log(`Total letters in your paragraph are "${letterCount}"\n`);
    }
    function wordsFun() {
        const wordsArray = para.split(" ");
        const wordsCount = wordsArray.length;
        console.log(`Total words in your paragraph are "${wordsCount}"\n`);
    }
    function both() {
        letterFun();
        wordsFun();
    }
    // to control loop
    let countMore = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'more',
            message: "Do you want to count more?",
            default: false
        }
    ]);
    if (!countMore.more) {
        myLoop = false;
        console.log(`Thank you for using our Letters and Words Counter App!\n`);
    }
}
// let para = 'This is my paragraph'
// const lettersWithoutSpaces = para.replace(/\s/g, "");
// const wordsArray = para.split(" ");
// letterFun();
// wordsFun();
// console.log(wordsArray);
