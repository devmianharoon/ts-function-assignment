"use strict";
function sum(num, num2) {
    var result = num + num2;
    console.log("Result is" + result);
}
sum(10, 20);
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log("Number is Even");
    }
    else {
        console.log("Number is Odd");
    }
}
evenOdd(554);
function percentage(totalNum, gainNum) {
    var result = gainNum / totalNum * 100;
    console.log("percentage is" + result);
}
percentage(1100, 700);
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
