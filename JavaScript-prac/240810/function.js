let isAdult;

(function init(age) {
    let currentAge = age;
    if (age >= 20) {
        isAdult = true;
    } else {
        isAdult = false;
    }
})(20);

console.log(isAdult); //  true
console.log(currentAge); //  Uncaught ReferenceError: currentAge is not defined