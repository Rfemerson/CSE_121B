/* Lesson 3 */

/* FUNCTIONS */

// Add

function add(firstNum, secondNum) {
    return(firstNum + secondNum);
}

function addNumbers() {
    let number1 = parseInt (document.querySelector("#addend1").value); 
    let number2 = parseInt (document.querySelector("#addend2").value);

    const sum = add(number1, number2)
    
    document.querySelector("#sum").value = sum;

}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// subtract 

function subtract(firstNum, secondNum) {
    return(firstNum - secondNum);
}

function subtractNumbers() {
    let number1 = parseInt (document.querySelector("#minuend").value); 
    let number2 = parseInt (document.querySelector("#subtrahend").value);

    const result = subtract(number1, number2)
    
    document.querySelector("#difference").value = result;

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Multiply

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function multiplyNumbers() {
    let number1 = parseInt (document.querySelector("#factor1").value); 
    let number2 = parseInt (document.querySelector("#factor2").value);

    const result1 = multiply(number1, number2)
    
    document.querySelector("#product").value = result1;

}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Division

function divide (firstNum, secondNum) {
    return(firstNum / secondNum);
}

function divideNumbers() {
    let number1 = parseInt (document.querySelector("#dividend").value); 
    let number2 = parseInt (document.querySelector("#divisor").value);

    const result = divide(number1, number2)
    
    document.querySelector("#quotient ").value = result;

}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

let currentDate = new Date();

// Step 2: Declare a variable to hold the current year

let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector("#year").innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector("#array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

let odds = numbers.filter(num => num % 2 !== 0);

document.querySelector("#odds").innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

let evens = numbers.filter(num => num % 2 == 0);

document.querySelector("#evens").innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

let sumOfSourceArray = numbers.reduce((acc, num) => acc + num, 0);

document.getElementById("sumOfArray").innerHTML = sumOfSourceArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

let sourceArrayTimesTwo = numbers.map(num => num * 2);

document.getElementById("multiplied").innerHTML = sourceArrayTimesTwo;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

let sumOfSourceArrayTimesTwo = numbers.map(num => num * 2).reduce((acc, num) => acc + num, 0);

document.querySelector("#sumOfMultiplied").innerHTML = sumOfSourceArrayTimesTwo;