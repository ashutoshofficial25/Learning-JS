let date = new Date();

console.log(date); // output =>  2022-09-25T15:18:10.681Z
//Order of date fuction is => year, month, day, hour, minute, second, and millisecond
// Note: JavaScript counts months from 0 to 11:
let orderOfdate = new Date(2022, 10);
console.log(typeof date); // Object

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
const overflow = new Date(2018, 5, 35, 10, 33, 30);

//Date String

const dateString = new Date("October 13, 2014 11:13:00"); //Output format

let dateS = date.toDateString(); //Sun Sep 25 2022

let getTime = date.getTime(); //1664120261168

let getFullYear = date.getFullYear(); //2022

let getMonth = date.getMonth(); //  8 => index based => 8 means 9

let getDate = date.getDate(); // 25 gives currnet date
console.log(getDate);
