// const add = function(a : number, b : number) : number {
//     return a + b;
// }

// function add2 (a : number, b : number) : number {
//     return a + b;
// }
// const result1 = add2(1, 2);

// const str = 'hello'
// const num = 123;
// const bool = false;
// const n = null;
// const u = undefined;
// const sym = Symbol('sym');
// const obj = {hello: 'world'};

// let str = 'hello'
// let num = 123;
// let bool = false;
// let n = null;
// let u = undefined;
// let sym = Symbol('sym');
// let obj = {hello: 'world'};

// let str: 'hello' = 'hello'
// str = 'world'

/* const obj = {name: 'kim'};
const arr = [1, 2, 'three'] as const;

obj.name = 'lee'

const arr1: string[] = ['1', '2', '3']
const arr2: Array<number> = [1, 2, 3]

const arr3 = [1, "2", 3]; */

// const tuple: [number, boolean, string] = [1, true, 'hello'];
// tuple[0] = 3;

// console.log(tuple);

// function add (a: number, b:number) {
//     return a + b;
// }

// function isEven(num: number): boolean {
//     return num % 2 ===0;
// }


type Name = string;

let firstName: Name = "HEEJU";
let lastName: Name = "LEE";


type MathO = (a: number, b: number) => number;


let add: MathO = (a, b) => {
    return a + b;
};


let multiply: MathO = (a, b) => {
    return a * b;
};

interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

const circle: Circle = {
    color: "red",
    radius: 10
};


interface Animal {
    name: string;
    age: number;
}


interface Dog extends Animal {
    breed: string;
}

const dog: Dog = {
    name: "Dubu",
    age: 3,
    breed: "Siba"
};

type IsString<T> = T extends string ? true : false;