var lname = "";
var fname = "";
var number = '';
var email = '';
var pass = '';
const regExD = /[0-9]/;
const onlyD = /[^0-9]/;
const regExAt = /@/;
const regExCom = /\.com/;
const capital = /[A-Z]/;
const lower = /[a-z]/;
const especial = /[^a-zA-z0-9 ]/;
let user;

if(localStorage.users != undefined) {
    user = JSON.parse(localStorage.users)
} else  {
    user = []; 
}



// ------------------enter darah event-------------------------

const lnameLog = document.querySelector('#lname');
const fnameLog = document.querySelector('#fname');
const phoneLog = document.querySelector('#number');
const emailLog = document.querySelector('#email');
const passwordLog = document.querySelector('#password');


const onep = document.querySelector('.lname-p')
const twop = document.querySelector('.lname-p-d')
const threep = document.querySelector('.fname-p')
const fourp = document.querySelector('.fname-p-d')
const fivep = document.querySelector('.only-number')
const sixp = document.querySelector('.if_8')
const sevenp = document.querySelector('.right-email')
const eightp = document.querySelector('.password')

lnameLog.addEventListener('keyup', (event)=>{
    if(event.keyCode === 13) {
        if(onep.style.color === "blue" && twop.style.color === "blue") {
            fnameLog.focus();
        }
    }
});

fnameLog.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        if(threep.style.color === 'blue' && fourp.style.color === 'blue') {
            phoneLog.focus();
        }
    }
});

phoneLog.addEventListener('keyup', (event) =>{
    if(event.keyCode === 13) {
        if(fivep.style.color === 'blue' && sixp.style.color === 'blue') {
            emailLog.focus();
        }
    }
});

emailLog.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        if(sevenp.style.color === 'blue') {
            passwordLog.focus();
        }
    }
});

passwordLog.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        if(eightp.style.color === 'blue') {
            zail();
        } else {
            alert('нууц үг: 8 үетэй,   том үсэг орсон,  тоо орсон,   тусгай тэмдэгт орсон байх ёстой')
        }
    }
});

// ------------------enter darah event END-------------------------




function passwordCheck() {
    pass = document.querySelector('#password').value;
    var corPass = document.querySelector('.password');


    if(pass.length > 0) {
        if( pass.length >= 8 
            && capital.test(pass) === true 
            && lower.test(pass) === true
            && regExD.test(pass) === true
            && especial.test(pass) === true
        ) {
            corPass.style.color = 'blue';
            corPass.style.textDecoration = 'none';
        } else {
            corPass.style.color = 'red';
            corPass.style.textDecoration = 'underline wavy red 1px';
        } 
    } else {
        corPass.style.color = 'black';
        corPass.style.textDecoration = 'none';
    }
}

function emailChange() {
    email = document.querySelector('#email').value;
    var rightEmail = document.querySelector('.right-email');

    if(regExAt.test(email) === true && regExCom.test(email) === true ) {
        rightEmail.style.color = 'blue';
        rightEmail.style.textDecoration = 'none';
    } else {
        rightEmail.style.color = 'red';
        rightEmail.style.textDecoration = 'underline wavy red 1px';
    }

    if(email.length === 0) {
        rightEmail.style.color = "black";
        rightEmail.style.textDecoration = 'none';
    }
}

function numberChange() {
    number = document.querySelector('#number').value;
    var hasNum = document.querySelector('.only-number');
    var if_8 = document.querySelector('.if_8');

    if(onlyD.test(number) === true) {
        hasNum.style.color = 'red';
        hasNum.style.textDecoration = 'underline wavy red 1px';

    } else {
        hasNum.style.color = 'blue';
        hasNum.style.textDecoration = 'none';
    }

    if(number.length === 8) {
        if_8.style.color = 'blue';
        if_8.style.textDecoration = 'none';
    } else {
        if_8.style.color = 'red';
        if_8.style.textDecoration = 'underline wavy red 1px';
    }

    if(number.length === 0) {
        hasNum.style.color = 'black';
        if_8.style.color = 'black';
        hasNum.style.textDecoration = 'none';
        if_8.style.textDecoration = 'none';
    }
}

function lnameChange() {
    lname = document.querySelector('#lname').value;
    const lnameP = document.querySelector('.lname-p')
    const lnamePd = document.querySelector('.lname-p-d')

    if(lname.length > 1) {
        lnameP.style.color = 'blue';   
        lnameP.style.textDecoration = 'none';
    } else {
        lnameP.style.color = 'red';
        lnameP.style.textDecoration = 'underline wavy red 1px';
    }

    if(regExD.test(lname) === true) {
        lnamePd.style.color = 'red';
        lnamePd.style.textDecoration = 'underline wavy red 1px';
    } else {
        lnamePd.style.color = 'blue';
        lnamePd.style.textDecoration = 'none';
    }

    if(lname.length === 0) {
        lnameP.style.color = 'black';
        lnamePd.style.color = 'black';
        lnameP.style.textDecoration = 'none';
        lnamePd.style.textDecoration = 'none';
    }
}

function fnameChange() {
    fname = document.querySelector('#fname').value;
    const fnameP = document.querySelector(".fname-p");
    const fnamePd = document.querySelector('.fname-p-d')

    if(fname.length > 1) {
        fnameP.style.color = 'blue';
        fnameP.style.textDecoration = 'none';
    } else {
        fnameP.style.color = 'red';
        fnameP.style.textDecoration = 'underline wavy red 1px';
    }

    if(regExD.test(fname) === true) {
        fnamePd.style.color = 'red';
        fnamePd.style.textDecoration = 'underline wavy red 1px';
    } else {
        fnamePd.style.color = 'blue';
        fnamePd.style.textDecoration = 'none';
    }

    if(fname.length === 0) {
        fnameP.style.color = 'black';
        fnamePd.style.color = 'black';
        fnameP.style.textDecoration = 'none';
        fnamePd.style.textDecoration = 'none';
    }
}

function zail() {     
    if(    ( onep.style.color === 'blue') 
        && (twop.style.color === "blue")
        && (threep.style.color === 'blue')
        && (fourp.style.color === 'blue')
        && (fivep.style.color === 'blue')
        && (sixp.style.color === 'blue')
        && (sevenp.style.color === 'blue')
        && (eightp.style.color === 'blue')    
    ) {
        user.push({lastname: lname, firstname: fname, phone: number, email: email, password: pass, id: user.length});
        localStorage.users = JSON.stringify(user)
        localStorage.whoLoggedIn = JSON.stringify({lastname: lname, firstname: fname, phone: number, email: email, password: pass, id: user.length - 1});
        console.log(user);
        lname = "";
        fname = "";
        number = '';
        email = '';
        pass = '';
        document.querySelector('#lname').value = '';
        document.querySelector('#fname').value = ''
        document.querySelector('#number').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#password').value = ''
        alert('амжилттай бүртгэгдлээ');
        user = JSON.parse(localStorage.users);
        window.location.href = "../../home/home.html";
    } else {
        alert('үнэн зөв бөглөнө үү');
    }
}
document.querySelector('#lastBtn').addEventListener('click', zail);