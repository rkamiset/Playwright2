function greet(name) {
    return `Hello, ${name}!`;
}  
console.log(greet("Alice"));

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Hello, World! reversed is: ", reverseString("Hello, World!"));

function add(a, b) {
    return a + b;
}
console.log("5 + 3 = ", add(5, 3));

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log("[5, 2, 8, 1, 9] sorted as: ", sortArray([5, 2, 8, 1, 9])); 

//anonymous function
let multiply = function(a, b) {
    return a * b;
};
console.log("5 * 3 = ", multiply(5, 3));

//arrow function -- colloquially, fat pipe/operator
let multiplyArrow = (a, b) => a * b;
console.log("5 * 3 (arrow function) = ", multiplyArrow(5, 3));

