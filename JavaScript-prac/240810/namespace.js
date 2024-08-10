// 파일 1: libraryA.js
var myNamespace = "Library A";

function doSomething() {
    console.log("Doing something in Library A");
}

// 파일 2: libraryB.js
var myNamespace = "Library B";

function doSomething() {
    console.log("Doing something in Library B");
}

// 파일 3: main.js  파일 로드 순서는 libraryA.js -> libraryB.js
console.log(myNamespace); // "Library B"가 출력.
doSomething(); // "Doing something in Library B"가 출력.