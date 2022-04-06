
const trList = document.querySelectorAll('tr');
const tdList = document.querySelectorAll('td');
var clients = [
    {name: 'Javkhlan', phone: '3884 8888', email: 'josh\'s@gmail.com'},
    {name: 'Bataa', phone: '8439 8438', email: "random@gmail.com"},
    {name: 'Saraa', phone: '3495 3455', email: 'haha@gmailcom'},
    {name: 'James Hetfield', phone: '3455 3456', email: 'james@mgial.com'},
    {name: 'Trevor', phone: '3454 239', email: 'trevor01@gmail.com'},
    {name: 'Micheal', phone: '8794 3720', email: 'micheal3479@gmail.com'},
    {name: 'Franklin', phone: '9830 9900', email: 'frank38fh@gmail.com'},
    {name: 'Lamar', phone: '2912 2297', email: 'lamraaaa3@gmail.com'},
    {name: 'Amanda', phone: '0033 9927', email: 'amrda34g@gmail.com'},
    {name: 'Lester', phone: '2999 9927', email: 'lestern@gmail.com'}
];

for(var i = 1; i < trList.length; i++) {
    trList[i].children[1].innerHTML = clients[i - 1].name;
    trList[i].children[2].innerHTML = clients[i - 1].phone;
    trList[i].children[3].innerHTML = clients[i - 1].email;
}

for(var i = 0; i > -1; i++) {
    tdList[i].style.animationDelay = `${i-1}s`;
}

console.log(parseInt(Math.random() * 11))
