const addList = document.querySelector('#addList');
const pTag = document.querySelector('.box-footer');
var order = 1;

function btnclick() {
    addList.style.display = 'block';
}

addList.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        if(addList.value != '') {
            addList.style.display = 'none';
            var listVal = addList.value;
            pTag.innerHTML += '<p id="lst">' + order + '. ' + listVal + '</p>';
            addList.value = '';
            order += 1;
        }
    }
})

function Delete() {
    pTag.addEventListener('click' , function(e) {
        if (e.target.id === 'lst') {
            e.target.remove()
        }
    })
}       

// function done() {
//     if(addList.value != '') {
//         addList.style.display = 'none';
//         var listVal = addList.value;
//         pTag.innerHTML += '<p id="lst">' + order + '. ' + listVal + '</p>';
//         addList.value = '';
//         order += 1;
//     }
// }


// pTag.addEventListener('click' , function(e) {
//     if (e.target.id === 'lst') {
//         e.target.remove()
//     }
// })