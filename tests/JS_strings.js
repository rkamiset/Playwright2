//strings
let greeting = "Hello, World!";
console.log(greeting)

let name = 'SubbaRao';
console.log(name);

let message = `Hello, ${name}!`;
console.log(message);

//string length
console.log("Length of greeting: ", greeting.length);
console.log("Length of name: ", name.length);
console.log("Length of message: ", message.length);

//string methods
console.log("greeting in uppercase: ", greeting.toUpperCase());
console.log("greeting in lowercase: ", greeting.toLowerCase());
console.log("greeting with 'World' replaced with 'Jagan': ", greeting.replace("World", "Jagan"));

//string concatenation
let newGreeting = greeting + " How are you?";
console.log("concatenated greeting: ", newGreeting);

//string slicing
console.log("First 5 characters of greeting: ", greeting.slice(0, 5));
console.log("Last 5 characters of greeting: ", greeting.slice(-5));

//string search
console.log("Index of 'World' in greeting: ", greeting.indexOf("World"));
console.log("Index of 'Jagan' in greeting: ", greeting.indexOf("Jagan"));
console.log("Index of 'l' in greeting after index 3: ", newGreeting.indexOf('l', 3));
console.log("Index of 'l' in greeting after index 9: ", newGreeting.indexOf('l', 9));

//string includes
console.log("Does greeting include 'World'? ", greeting.includes("World"));
console.log("Does greeting include 'Jagan'? ", greeting.includes("Jagan"));

//string trim
console.log("greeting with whitespace removed: ", greeting.trim());

//string split
console.log("greeting split by comma: ", greeting.split(","));

//string replace
console.log("greeting with 'World' replaced with 'Jagan': ", greeting.replace("World", "Jagan"));

//string repeat
console.log("greeting repeated 2 times: ", greeting.repeat(2));

//string pad
console.log("greeting padded to 20 characters: ", greeting.padStart(20));
console.log("greeting padded to 20 characters: ", greeting.padEnd(20));

//string match 
console.log("greeting matched with 'World': ", greeting.match("World"));
console.log("greeting matched with 'Jagan': ", greeting.match("Jagan"));    

//string search
console.log("Index of 'World' in greeting: ", greeting.indexOf("World"));
console.log("Index of 'Jagan' in greeting: ", greeting.indexOf("Jagan"));   

//string parsing
console.log("greeting parsed as an array: ", greeting.split(" "));

//string conversion
console.log("greeting converted to a number: ", Number(greeting));
console.log("greeting converted to a boolean: ", Boolean(greeting));

//parse
console.log("greeting parsed as a JSON object: ", JSON.parse('{"message": "' + greeting + '"}'));

//parseInt
let date = "2023-10-15";
console.log("date parsed as an integer: ", parseInt(date)); 


let num = '123 '
console.log("num parsed as an integer: ", parseInt(num)); 
//toString
let number = 1234;
console.log("num converted to a string: ", number.toString());

//count string occurrences
console.log("Number of 'l' in greeting: ", (greeting.match(/l/g) || []).length);
console.log("Number of 'o' in greeting: ", (greeting.match(/o/g) || []).length);

let repeatingText = "Hello, World! Hello, Universe! Hello Helloooo";
let val = repeatingText.indexOf("Hello");
let count = 0;  
while(val !== -1) {
    count++;
    val = repeatingText.indexOf("Hello", val + 1);
}
console.log("Number of 'Hello' in repeatingText using while loop: ", count);
console.log("Number of 'Hello' in repeatingText: ", (repeatingText.match(/Hello/g) || []).length);  