// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Point.prototype = {
//     toString: function() {
//         return `(${this.x},${this.y})`
//     }
// }

// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point);

// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function() {
//         return Math.PI * this.radius **2;
//     }
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea)

// class Vehicle {
//     constructor(name, wheel){
//         this.name = name
//         this.wheel = wheel
//     }
// }
// const myVehicle = new Vehicle('자전거', 2)
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//     constructor(name, wheel) {
//         super(name, wheel)
//     }
// }
// const myBicycle = new Bicycle('따릉이', 2)
// console.log(myBicycle);

// class Car extends Vehicle{
//     constructor(name, wheel, license){
//         super(name, wheel)
//         this.license = license
//     }
// }
// const myCar = new Car('벤츠', 4, true);
// console.log(myCar);

// Book 생성자 함수
// function Book(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }

// // 프로토타입을 이용하여 출판일과 페이지수 프로퍼티 추가
// Book.prototype.publicationDate = '';
// Book.prototype.numberOfPages = 0;

// // Book 객체 생성
// const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 10.99);
// book1.publicationDate = '1925-04-10';
// book1.numberOfPages = 218;

// const book2 = new Book('1984', 'George Orwell', 8.99);
// book2.publicationDate = '1949-06-08';
// book2.numberOfPages = 328;

// console.log(book1);
// console.log(book2);

// class Person {
//     constructor(name, age) {
//         this.firstName = name
//         this.firstAge = age
//     }
//     getFullWord() {
//         return `안녕하세요 제 이름은 ${this.firstName}이고, 나이는 ${this.firstAge} 입니다.`
//     }
// }

// const heeju = new Person('Heeju', "26");

// console.log(heeju.getFullWord());

class Calculator {
    static add(a, b) {
        return a+ b;
    }

    static subtract(a, b){
        return a - b;
    }

}

console.log(Calculator.add(1,4));
console.log(Calculator.subtract(1,4));