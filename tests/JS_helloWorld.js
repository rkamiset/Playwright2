console.log("Hello, World!");
//System.out.println("Hello, World!"); -- Java
//print("Hello, World!"); -- Python

let message = "Hello, Raj!"
console.log("Message:", message);
console.log("Sliced message:", message.slice(0, 6) + " ... " + message.slice(7));
console.log("Message:", message);

//let message = "Hello, Rajendra!" --SyntaxError: Identifier 'message' has already been declared
var message2 = "Hello, Raj!"
var message2 = "Hello, Rajendra!"
console.log("Message 2:", message2);
console.log("message2.indexOf('Rajendra'):", message2.indexOf("endra")); // first occurrence of the first char
console.log("message2.includes('Rajendra'):", message2.includes("Rajendra")); //case sensitive

let a = 24
let sum = 0;
let isAIBubble = true
let array = [1, 2, 3];

var array2 = Array(10);
var array2 = new Array(11,22,33,44,55,66,77,88,99); 
for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
}
console.log("Sum:", sum);
//let numbers = 2..toExponential.length

console.log("typeof (a):", typeof (a));
console.log("typeof(message):", typeof(message));
console.log("typeof(isAIBubble):", typeof(isAIBubble));
console.log("typeof(isAIBubble) Negation:", typeof(!isAIBubble));

let b = 1.5;
if (b === 1.5) {
    console.log("typeof(b):", typeof(b));
}

let c = null;
if (c == null) {
    console.log("typeof(c):", typeof(c));
} else if (c === undefined) {
    console.log("typeof(c) is not null.", typeof(c));
} else {
    console.log("Second else. No elseif.", typeof(c));
}

let d = undefined;
console.log("typeof(d):", typeof(d));

let e = a+b ;
console.log("typeof(e):", typeof(e));

let f = a+b+c+d;
console.log("typeof(f):", typeof(f) && f);

while (array.length > 0) {
    console.log("Array element:", array.pop());
    //push(), unshift()
}

do {
    process.stdout.write(message.charAt(0));
    //console.log("Message char:", message.charAt(0));
    message = message.slice(1); 
} while (message.length > 0); 

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0 ) {
        //process.stdout.write(i);
        //console.log("even i is: ", i);
    } else {
        //process.stdout.write(i);
        //console.log("odd i is: ", i);
    }   
}

for (let j = 0; j < 10; j++) {
    if (j % 2 === 0 && j !== 0) {
        //process.stdout.write(j);
        //console.log("even j is: ", j);
    } else if (j !== 0 || j === 0) {
        //process.stdout.write(j);
        //console.log("odd j is: ", j);
    }   
}
//Before filter():
var scores = [85, 90, 78, 92, 88];
var evenScores = [];
var oddScores = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 === 0) {
        evenScores.push(scores[i]);
    }  else {
        oddScores.push(scores[i]);
    } 
    //console.log("Score:", scores[i]);
}
console.log("Scores:", scores);
console.log("Even scores:", evenScores);
console.log("Odd scores:", oddScores);

//Using Filter():
let evenScoresFiltered = scores.filter(score => score % 2 === 0); //condition
let oddScoresFiltered = scores.filter(score => score % 2 !== 0);
console.log("Even scores (filtered):", evenScoresFiltered);
console.log("Odd scores (filtered):", oddScoresFiltered);   

//using reduce() on the scores
let sumOfEvenScores = scores.reduce((acc, score) => {
    return score % 2 === 0 ? acc + score : acc;
}, 0);
console.log("Sum of even scores (reduced):", sumOfEvenScores);

//using reduce() on the odd scores
let sumOfOddScores = scores.reduce((acc, score) => {
    return score % 2 !== 0 ? acc + score : acc;
}, 0);
console.log("Sum of odd scores (reduced):", sumOfOddScores);

//map(): 
let doubledScores = scores.map(score => score / 2); //operation
console.log("Doubled scores (mapped):", doubledScores); 

//reduce() on the doubled scores
console.log("Sum of doubled scores (reduced):", doubledScores.reduce((sum, val) => sum + val, 0));

//applying filter() and reduce() together
let highScores = scores.filter(score => score > 85);
console.log("High scores (filtered):", highScores);
let sumOfHighScores = highScores.reduce((sum, val) => sum + val, 0);
console.log("Sum of high scores (reduced):", sumOfHighScores);

//applying filter(), map() and reduce() together in a single line
let sumOfHighDoubledScores = scores.filter(score => score > 85).map(score => score / 2).reduce((sum, val) => sum + val, 0);
console.log("Sum of high doubled scores (filtered, mapped and reduced):", sumOfHighDoubledScores);  

let myFilteredMappedReducedOutput = scores.filter(scores => scores < 90).map(scores => scores ^ 2).reduce((sum, val) => sum + val, 0); //map-reduce order works, not reverse.
console.log("myFilteredMappedReducedOutput: ", myFilteredMappedReducedOutput);

//sort
let sortedScores = scores.sort((a, b) => a - b);
console.log("Sorted scores:", sortedScores);  
//reverse sort
let reversedScores = scores.slice().sort((a, b) => b - a);
console.log("Reversed scores:", reversedScores);    

let countries = ["USA", "Canada", "Mexico", "Brazil", "Argentina"];
console.log("Original countries:", countries);

let sortedCountries = countries.sort();
console.log("Sorted countries:", sortedCountries);

let sortedCountriesDesc = countries.sort((a, b) => b.localeCompare(a));
console.log("Sorted countries (descending):", sortedCountriesDesc);

//reverse
let reversedCountries = countries.slice().reverse();
console.log("Reversed countries:", reversedCountries);  

