let uesrId = document.querySelector('#username');
let pw1 = document.querySelector('#password');
let pw2 = document.querySelector('#confirmPassword')


function checkID() {
    if(uesrId.value.length < 4 || uesrId.value.length > 15) {
        alert("4~5자리 영문과숫자를 사용하세요.")
        uesrId.ariaSelected();
    }
}

function checkPw() {
    if(pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.")
        pw1.value = "";
        pw1.focus();
    }
}

function comparePw() {
    if(pw1.value != pw2.value) {
        alert("비밀번호가 일치하지 않습니다.")
        pw2.focus();
        pw2.value='';
    }
}