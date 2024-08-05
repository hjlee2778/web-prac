/* const str = "I love Apple pie and apple juice";

// 정규표현식을 사용하여 'apple' 단어 포함 여부 확인
const regex = /apple/i;  // 'i' 플래그는 대소문자를 구분하지 않음을 의미합니다.

const containsApple = regex.test(str);

console.log(containsApple);  // true */

/* const str = "Hello World! This is a Test String";

// 정규표현식을 사용하여 모든 대문자 찾기
const regex = /[A-Z]/g;

const upperCaseLetters = str.match(regex);

console.log(upperCaseLetters);  // ['H', 'W', 'T', 'T', 'S'] */

const str = "How do you do"

const regex = /[^hwyu\s]/ig;

const result = str.match(regex);
console.log(result);








