import inquirer from "inquirer";
//currency conversion
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.26,
        "GBP": 1,
        "PKR": 360.76,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.54,
    },
};
//prompt user for input
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "please select your currency?",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "list",
        name: "from",
        message: "please select your conversion rate",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "input",
        name: "amount",
        message: "please enter the amount you wish to conver",
    }
]);
//Destructuring User input
const { from, to, amount } = answer;
// perform currency conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid conversion");
}
