//Premitive DT:

// 7 types: strings
// const id = Symbol('123');
// const anotherid = Symbol('123');
// console.log(id === anotherid);
//Arrays
const heroes = ["shaktiman","naagraj","doge"];
///objects
let myobj={
 name:"jatin",
 age : 21,
};
//functions
const myfunction=function(){
    console.log("hello duniya walo");

}
myfunction();
console.log(typeof myobj)
console.log(typeof myfunction)

//https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++memory+++++

//stack(use in premitive), heap(use in non premitive);

let name = "king"
let anotherName = name;
anotherName = "jatin"
console.log(anotherName)
console.log(name);

let user1= {
    name :"jatin kumar",
    upi :"87923@paytm"

}

let user2 =  user1;
user2.upi =  "Prashant@google.com"
console.log(user1);
console.log(user2);
