// function callback() {
//     console.log("콜백함수가 호출 됨.")
// }
// setTimeout(callback, 1000);
// console.log("작업을 수행함")

// function getUsers(callback) {
//     let users = [];
//     setTimeout(() => {
//         const users = [
//             {name: "Kim", email: "kim@gmail.com"},
//             {name: "Lee", email: "lee@gmail.com"},
//             {name: "Park", email: "park@gmail.com"},
//         ];
//         callback(users);
//     }, 1000)
// }

// function findUser(name, callback) {
//     getUsers (users =>{
//         const user = users.find(user => user.name === name );
//         callback(user)
//     })
// }

// let user = findUser("Kim", user =>{
//     console.log(user);
// });

// let greeting = document.querySelector('#greeting');
// greeting.addEventListener("click", sayHello);
// function sayHello() {
//     alert("안녕하세요.")
// }

// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve ([
//             {name: "Kim", email: "kim@gmail.com"},
//             {name: "Lee", email: "lee@gmail.com"},
//             {name: "Park", email: "park@gmail.com"},
//             ]
//             )
//         }, 1000);
//     }) 
// }
// let promise = getUsers();
// promise.then(users => console.log(users));

// const promiseA = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("5");
//       resolve("5");
//     }, 1000);
//   });
  
//   promiseA.then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("B");
//         resolve("B");
//       }, 1500);
//     });
//   }).then(() => {
//     console.log("완료!");
//   });
 
// // 첫 번째 Promise: 1초 후에 숫자 5 반환
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(5)
//     //resolve(5);  // 성공 시
//     reject("에러!");  // 실패 시
//   }, 1000);
// });

// // 첫 번째 Promise가 성공한 경우 두 번째 Promise 실행
// const promise2 = promise1.then((value) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value * 10);
//     }, 1500);
//   });
// }).catch((error) => {
//   console.error("에러!", error);
// });

// // 최종 결과 출력
// promise2.then((result) => {
//   console.log(result);  // 두 번째 Promise가 성공한 경우 출력
// }).catch((error) => {
//   console.error(error);  // 첫 번째 Promise가 실패하면 여기서도 처리 가능
// });


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function* asyncGenerator(tasks) {
//     for (const task of tasks) {
//         yield await task();
//     }
// }

// async function main() {
//     const tasks = [
//         async () => {
//             await delay(2000);
//             return '첫번째 작업';
//         },
//         async () => {
//             await delay(2000);
//             return '두번째 작업';
//         },
//         async () => {
//             await delay(2000);
//             return '세번째 작업';
//         }
//     ];

//     for await (const result of asyncGenerator(tasks)) {
//         console.log(result);
//     }
// }

// main();

// function* taskGenerator() {
//    yield new Promise((resolve) => setTimeout(() => resolve("1 완료"), 2000));
//    yield new Promise((resolve) => setTimeout(() => resolve("2 완료"), 2000));
//    yield new Promise((resolve) => setTimeout(() => resolve("3 완료"), 2000));
// }

// const taskDisplay = async() => {
//     const tasks = taskGenenrator();
//     for(let task of tasks) {
//         const result = await task;
//         console.log(result);
//         }
// }
// taskDisplay();

const users = {
    1: { name: 'kim', age: 25 },
    2: { name: 'Ryu', age: 30 },
    3: { name: 'Lee', age: 27 }
};

// 비동기 함수로 사용자 정보를 가져옵니다.
async function getUser(userId) {
    // 네트워크 지연을 시뮬레이션하기 위해 2초 동안 대기합니다.
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 사용자 정보를 반환합니다.
    if (users[userId]) {
        return users[userId];
    } else {
        throw new Error("User not found");
    }
}

// 비동기 함수를 호출하고 결과를 출력합니다.
async function main() {
    try {
        const user1 = await getUser(1);
        console.log(user1);

        const user2 = await getUser(2);
        console.log(user2);

        const user3 = await getUser(3);
        console.log(user3);

    } catch (error) {
        console.error(error);
    }
}

main();
