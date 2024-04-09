// String Manipulation
let firstName = "Dasaradha";
let lastName = "Veduka";
let fullName = firstName.concat(" ", lastName);
console.log("Full Name:", fullName);

let sentence = "Hello, Hi";
console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());

let fruits = "Apple, Banana, Mango";
let fruitArray = fruits.split(", ");
console.log("Fruit Array:", fruitArray);

// Array Manipulation
let numbers = [1, 2, 3,4];
numbers.push(5);
console.log("After push:", numbers);

let removedElement = numbers.pop();
console.log("Removed Element:", removedElement);
console.log("After pop:", numbers);

let moreNumbers = [6, 7, 8];
let combinedArray = numbers.concat(moreNumbers);
console.log("Combined Array:", combinedArray);

// Math Operations
let maxNumber = Math.max(10, 20, 30);
let minNumber = Math.min(10, 20, 30);
console.log("Max Number:", maxNumber);
console.log("Min Number:", minNumber);

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNum);

let squareRoot = Math.sqrt(30);
console.log("Square Root:", squareRoot);

// Date and Time
let currentDate = new Date();
console.log("Current Date:", currentDate);

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Months are 0-based
let day = currentDate.getDate();
console.log("Year:", year, "Month:", month, "Day:", day);

let isoDateString = currentDate.toISOString();
let humanReadableDate = currentDate.toDateString();
console.log("ISO Date:", isoDateString);
console.log("Human Readable Date:", humanReadableDate);
