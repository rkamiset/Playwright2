//classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Alice", 30);
person1.greet();

Person.sex = "Female"; //not working, no error thrown
let person2 = new Person("Bob", 25);
person2.greet();

delete Person.age; //not working, no error thrown
let person3 = new Person("Charlie", 35);
person3.greet();

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`The ${this.brand} ${this['model']} is starting.`);
    }
}   

let car1 = new Car("Toyota", "Camry");
car1.start();

let car2 = new Car("Honda", "Civic");
car2.start();

let car3 = new Car("Ford", "Mustang");
car3.start();

let car4 = new Car("Chevrolet", "Malibu");
car4.start();
car4.model = 'Impala';
car4.start();
car4.brand = 'Chevy';
console.log(car4);