"use strict";
// Sum of TwoNumber
function sum(num, num2) {
    var result = num + num2;
    console.log("Result is" + result);
}
sum(10, 20);
// Even Odd Numbeer
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log("Number is Even");
    }
    else {
        console.log("Number is Odd");
    }
}
evenOdd(554);
// Percentage Function
function percentage(totalNum, gainNum) {
    var result = gainNum / totalNum * 100;
    console.log("percentage is" + result);
}
percentage(1100, 700);
// According two age Function
function userAge(age) {
    if (age <= 12) {
        console.log("you are Child");
    }
    else if (age <= 13 || age <= 19) {
        console.log("you are Teenager");
    }
    else {
        console.log("you are Adult");
    }
}
userAge(65);
// Number is devisibe of 2 or 5 Function
function divisible(number) {
    if (number % 3 == 0) {
        console.log("Number is Devisible to 3");
    }
    else if (number % 5 == 0) {
        console.log("Number is Devisible to 5");
    }
    else {
        console.log("Number is Not Devisible");
    }
}
divisible(100);
// Calculate  discount function
function calculateDiscount(price) {
    if (price > 100) {
        return price * 0.1;
    }
    else {
        return price * 0.05;
    }
}
const productPrice = 140;
const discount = calculateDiscount(productPrice);
const discountedPrice = productPrice - discount;
console.log(`Original Price: ${productPrice.toFixed(2)}`);
console.log(`Discount: ${discount.toFixed(2)}`);
console.log(`Discounted Price: ${discountedPrice.toFixed(2)}`);
//  Develop a program that determines the day of the week. Ask the user for a number (1-7) and
//   use nested if statements to print the corresponding day's name
function dayOfWeek(days) {
    if (days == 1) {
        console.log("Monday");
    }
    else if (days == 2) {
        console.log("Tuesday");
    }
    else if (days == 3) {
        console.log("Wednesday");
    }
    else if (days == 4) {
        console.log("Tuesday");
    }
    else if (days == 5) {
        console.log("Friday");
    }
    else if (days == 6) {
        console.log("Saturday");
    }
    else if (days == 7) {
        console.log("Sunday");
    }
}
dayOfWeek(5);
function weather(temp) {
    if (temp <= 30) {
        console.log("Wear warm Cloths");
    }
    else if (temp <= 30 || temp <= 60) {
        console.log("Wear light Cloths");
    }
    else {
        console.log("Wear Cold Cloths");
    }
}
weather(38);
// Celsius to Fahrenheit 
function celsiusOFahrenheit(temp) {
    let result = temp * (9 / 5) + 32;
    console.log("Tempurature in Fahrenheit is " + result);
}
celsiusOFahrenheit(10);
function leapYear(year) {
    if (year % 4 == 0) {
        console.log("Year is Leap");
    }
    else {
        console.log("Year is  not Leap");
    }
}
leapYear(2017);
//Write a program that takes the number of units consumed by a user if it is greater than 100 
// then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then
// add 25% of tax
function bill(units) {
    let unitPrice = 10;
    let tax;
    let finalBill;
    let billPrice;
    if (units <= 100) {
        tax = 1.1;
        billPrice = units * unitPrice;
        finalBill = tax * billPrice;
        console.log(finalBill);
    }
    else if (units <= 200) {
        tax = 1.15;
        billPrice = units * unitPrice;
        finalBill = tax * billPrice;
        console.log(finalBill);
    }
    else if (units <= 500) {
        tax = 2.25;
        billPrice = units * unitPrice;
        finalBill = tax * billPrice;
        console.log(finalBill);
    }
}
bill(50);
bill(100);
bill(200);
bill(300);
bill(400);
bill(500);
bill(600);
