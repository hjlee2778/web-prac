// function getInput() {
//     const x = document.forms["form1"];
//     let text = "";
//     for(let i =0; i< x.length; i++)
//         text += x.elements[i].value + '<br>';
//     document.getElementById("show").innerHTML = text;
// }

// function myFunction () {
//     let id = document.getElementById("id").value;
//     let pw = document.getElementById("pass")

//     if(pw.length < 1) {
//         document.getElementById('show').innerHTML = "비밀번호를 입력해주세요."
//     } else if (pw.length > 10) {
//         document.getElementById('show').innerHTML = "비밀번호는 10자리 이하로 입력해주세요."
//     }else {
//         document.getElementById('show').innerHTML = "입력 OK"
//     }

//     setTimeout(() => {
//         document.getElementById("show").innerHTML = "";
//     })

//     ["id", "pass"].forEach(fireld => document.getElementById(fireld).value ="");
// }

const x = document.getElementById("name");
x.onfocus = function() {changeBgColorFo();}
x.onblur = function() {changeBgColorBl();}

function changeBgColorFo() {
    x.style.backgroundColor = "pink";
}
function changeBgColorBl() {
    x.style.backgroundColor = "gray";
}

const keyInput = document.getElementsById("keyInput");
// let text ='';
// keyInput.addEventListener("keydown", showKey);
// function showKey(e) {
//     text += e.key;
//     document.getElementById("show").innerHTML = text;
// }

keyInput.addEventListener("keyup",);
function changeUpper() {
    keyInput.value = keyInput.value.tooUperca
}