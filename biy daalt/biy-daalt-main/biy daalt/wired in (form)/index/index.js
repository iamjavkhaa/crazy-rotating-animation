const phoneLog = document.querySelector('#phone-log');
const passLog = document.querySelector('#password-log');
const user = JSON.parse(localStorage.users);


function logIn() {
    let result;

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
}