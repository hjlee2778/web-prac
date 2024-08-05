// let check = document.querySelector('#shippingInfo');
// check.addEventListener("click", function(){
//     if(check.checked == true){
//         document.querySelector('#shippingName').value = document.querySelector("#billingName").value;
//         document.querySelector('#shippingTel').value = document.querySelector("#billingTel").value;
//         document.querySelector('#shippingAddr').value = document.querySelector("#billingAddr").value;
//     } else {
//         document.querySelector('#shippingName').value = "";
//         document.querySelector('#shippingTel').value = "";
//         document.querySelector('#shippingAddr').value = "";
//     }
// })

function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // 아이디 검증
    if (!/^[a-zA-Z0-9]{4,15}$/.test(username)) {
        alert('아이디는 4~15자리의 영문과 숫자로 입력해야 합니다.');
        return;
    }

    // 이메일 검증
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('유효한 이메일을 입력해 주세요.');
        return;
    }

    // 비밀번호 검증
    if (password.length < 8) {
        alert('비밀번호는 8자리 이상이어야 합니다.');
        return;
    }

    // 비밀번호 확인 검증
    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }
}  