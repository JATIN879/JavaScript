//object literals:


const mySym = Symbol("Key1")//
const JsUsers = {
    name : "jatin",
    "full name" : "jatin rathore",
    [mySym] : "myKey1" ,
    age : 18,
    location : "firozabad",
    email :  "jatinkumar@gmail.com",
    isLogggedIn :false,
    lastLoginDays :["monday","saturday"] 
}


// console.log(JsUsers.email);
// console.log(JsUsers["email"]);
// console.log(JsUsers["full name"]);
// console.log(JsUsers[mySym]);

// for changing values of any keys
// JsUsers.email = "jatinKing@gmail.com"
//Object.freeze(JsUsers);
JsUsers.email = "vskknvjsnfil";
// console.log(JsUsers)

JsUsers.greeting1 = function(){
console.log("happy-birthday")
}

JsUsers.greeting2 = function(){
 console.log(`hello js user ${this.name}`)
}

console.logz(JsUsers.greeting1())
console.log(JsUsers.greeting2())
