//class without constructor
let person1 = { //person1 is an object, not a class.
    fname: "",
    lname: "",
    age: 0,
    fullname : function() {
        console.log(this.fname + this.lname)
    }
}
//class without construction and variables assigned
//let person1 = new Person();
person1.fname = "John";
person1.lname = "Doe"
person1.age = 30;
//person1.fullname = `${person1.fname} ${person1.lname}`;

console.log(person1);
// delete person1.age;
// console.log(person1);

for (let key in person1) {
    console.log(`${key}: ${person1[key]}`);
}