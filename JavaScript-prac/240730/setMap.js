/* const set = new Set();
console.log(set);

const set1 = new Set([1, 2, 3, 3])
console.log(set1);

const uniq = array => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 5, 4])); */

// const {size} = new Set([1, 2, 3, 3]);
// console.log(size);

// const set = new Set();
// set.add(1).add(2);
// console.log(set);

// const set = new Set([1, 2, 3]);
// console.log(set.has(4));
// set.clear();
// console.log(set);


// let odds = new Set ([1, 3, 5, 7, 9]);
// let sum = 0;
// for(let o of odds)
//     sum += o;
// console.log(sum);

// let product = 1;
// odds.forEach(o => product *= o);
// console.log(product);

// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set (userIDs);
// uniqueUserIDs.forEach(userId => {
//     console.log(`ID: ${userId}`);
// });

// const tags = ['JavaScript', 'CSS', 'CSS', 'HTML'];
// const uniqueTags = new Set(tags);
// uniqueTags.forEach(tag => {
//     console.log(`tag : ${tag}`)
//     }
// );

// const set = new Set([1, 2, 3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest);

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 2, 3]);
// let union = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter(x => set2.has(x)));
// console.log(intersection)
// let difference = new Set([...set1].filter(x => !set2.has(x)));
// console.log(difference);

// const set1 = new Set("I am a student");
// document.write(set1.size);

//문제
//Set 객체 요소의 개수를 구하시오

// "I am a student";

// let a = "I am a student";
// const set = new Set(a);
// console.log(`Set 객체 요소의 개수: ${set.size}`);

// const map1 = new Map([['key1', 'value1'],['key2', 'value2']]);
// console.log(map1);

// const map2 = new Map([[1,2]]);
// console.log(map2);

// const map = new Map([['key1', 'value1'],['key1', 'value2']]);
// console.log(map);

// const {size} = new Map([['key1', 'value1'],['key2', 'value2']]);
// console.log(size);
// const map = new Map();
// map.set('key1', 'value1').set('key2', 'value2');
// console.log(map);

// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'kim'};
// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.delete(kim));
// console.log(map.has(kim));
// map.clear();
// console.log(map);


// let map = new Map();
// map.set(0, 'zero');
// map.set(1, 'one');
// map.forEach((value, key) => console.log(key, value));

// let scores = new Map([['국어', 85],['영어', 90], ['수학', 95]]);
// let sum = 0;
// let average;

// scores.forEach(function(value){
//     sum += value;
// });

// average = sum / scores.size;

// console.log(sum);
// console.log(average);

let map = new Map();
map.set('title :', '유럽 책방 문화 탐구');
map.set('author :', '한미화');
map.set('price :', 23000);
map.forEach((value, key) => console.log(key,value));

let numbers = new Set([3, 7, 12, 3, 12, 3])
document.write(numbers);

