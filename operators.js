"use strict";

let num1 = 10;
let num2 = 5;

// Perform mathematical operations on num1 and num2
console.log("My answer is", num1 + num2); // Output: 15
console.log("My answer is", num1 - num2); // Output: 5
console.log("My answer is", num1 * num2); // Output: 50
console.log("My answer is", num1 / num2); // Output: 2
console.log("My answer is", num1 % num2); // Output: 0



// Use increment and decrement operators on num1 and num2 

num1++; // Increase num1 by 1
num2--; // Decrease num2 by 1

console.log("Number has increase to", num1); // Output: 11
console.log("Number has decrease to", num2); // Output: 4


// Getting user name and welome user
let BTN = document.querySelector("#btn");
let HEADING = document.querySelector("#heading");

BTN.onclick = () => {
    let USER_NAME = prompt("What is your name?")
    alert(`Hello ${USER_NAME}, nice to see you`)
    HEADING.textContent = `Welcome ${USER_NAME}`;
};

// Prompt user for two inputs
let input1 = prompt("Enter a number");
let input2 = prompt("Enter a second number");

// Convert inputs to numbers using parseFloat()
input1 = parseFloat(input1);
input2 = parseFloat(input2);


// Perform basic mathematical operations on user input
console.log(input1 + input2); // Output: the sum of input1 and input2
console.log(input1 - input2); // Output: the difference between input1 and input2
console.log(input1 * input2); // Output: the product of input1 and input2
console.log(input1 / input2); // Output: the quotient of input1 and input2
console.log(input1 % input2); // Output: the remainder of input1 divided by input2

