let x = "global x";
let y = "global y";

function outer() {
    let z = "outer's local z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        let x = "inner's local x";
        let z = "inner's local z";
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
    console.log(z);
}

outer();

console.log(x);
console.log(z);