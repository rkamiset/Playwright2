// Create an array called expenses that contains at least 5 different expense amounts.
let expenses = [10, 15, 25, 30.5, 55];          

// Calculate the total expenses by summing all the elements of the array.   
let totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);    

// Find the highest and lowest individual expenses within the array.
let highestExpense = Math.max(...expenses); 
let lowestExpense = Math.min(...expenses);

console.log("Total expenses:", totalExpenses);
console.log("Highest expense:", highestExpense);
console.log("Lowest expense:", Math.min(...expenses));      

// Create a list of students
const students = ['John Doe', 'Subba Rao', 'Yellaiah Trump', 'KD Vance'];
console.log("students: ", students);

//add new student
students.push('Me Too'); // students.add('Me Too'); // add() is not a method of arrays  
console.log("student added: ", students);

//remove a student
students.pop(); // remove last student

//remove a student at given index
students.splice(2, 1); // remove student at index 2 //students.remove(indexOf(2)); wrong
console.log("student removed: ", students);

//Assignment 3
const productPrices = [9.99, 15.99, 25.00, 50];
console.log("productPrices: ", productPrices);

const discountPrices = productPrices.map(productPrice => productPrice*.9);
console.log("discountPrices", discountPrices);

const affordableProducts = discountPrices.filter(discountPrice => discountPrice < 50);
console.log("affordableProducts", affordableProducts);

const affordableProductsReduced = affordableProducts.reduce((sum, val) => sum + val, 0);
console.log("affordableProductsReduced", affordableProductsReduced);
