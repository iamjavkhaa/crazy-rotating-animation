var startYear = 2021;
var startMonth = 1;
var startDay = 1;

var endYear = 2022;
var endMonth = 1;
var endDay = 1;

var startTotal = ((startYear - 1) * 365) + ((startMonth - 1) * 30) + startDay; 
var endTotal = ((endYear - 1) * 365) + ((endMonth - 1) * 30) + endDay;

console.log('startDay', startTotal)
console.log( 'endDay' ,endTotal);

var remainDays = endTotal - startTotal;
console.log(remainDays + ' өдөр ажилласан')