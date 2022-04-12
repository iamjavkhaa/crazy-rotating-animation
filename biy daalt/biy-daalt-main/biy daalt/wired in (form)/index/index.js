const phoneLog = document.querySelector('#phone-log');
const passLog = document.querySelector('#password-log');
let user;

if(localStorage.users != null ) {
    user = JSON.parse(localStorage.users);
}
const passwordLog = document.querySelector('#password-log');

phoneLog.addEventListener('keyup', (event)=>{
    if(event.keyCode === 13) {
        if(phoneLog.value != '') {
            passwordLog.focus();
        }
    }
});

passwordLog.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        if(passwordLog.value != '') {
            logIn();
        }
    }
});

function logIn() {
    let result;

    if(user != undefined) {
        for(var i = 0; i < user.length; i++) {
            if(user[i].phone === phoneLog.value && user[i].password === passLog.value) {
                console.log('phone & password are correct');
                result = true;
                window.location.href = "../home/home.html";
                localStorage.whoLoggedIn = JSON.stringify(user[i]);
                break;
            }
        } 

        if(result != true) {
            alert('утас эсвэл нууц үг буруу')
        } 
    } else {
        alert('та эхлээд бүртгүүлнэ үү')
    }
}