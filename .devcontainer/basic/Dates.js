//Dates


// let myDate = new Date()  //object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());//seperated by comma
// console.log(typeof myDate) //object


// let myCreatedDate = new Date(2023, 0, 23) //in js months will be start from zeroes


let myCreatedDate = new Date("02-10-2004")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp) //milli-Seconds
// console.log(myCreatedDate.getTime());

// date converted into seconds
//console.log(Math.floor(Date.now()/1000)); 
let new_date = new Date();
console.log(new_date.getFullYear());
console.log(new_date.getMonth());
console.log(new_date.getDay()+1);

// `${new_date.getDay()}` and the time

new_date.toLocaleString('default',{
    weekday:"long",
    timezone:''
})
