"use strict";
// Function Signiture
var greet;
// Functtion Implementation according to signiture
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
