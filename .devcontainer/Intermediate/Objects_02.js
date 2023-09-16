// Object declaration using constructor:



const tinderUser= new Object();
tinderUser.id = "123abc"
tinderUser.name = "Jatin"
tinderUser.isLoggedIn = false

//console.log(tinderUser)




// const  regularUser ={
//     email : "someone@gmail.com",
//     full_name :{
//         userFullName :{
//             firstName : "jatin",
//             lastName : "Rathore"
//         }
   
//     }
// }


// console.log(regularUser.full_name?.userFullName)




//Merging objects OR combining Objects:

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"e", 6:"f"};

//const obj3 = {obj1, obj2};
// const obj3 = Object.assign({ },obj1,obj2,obj4)
// console.log(obj3)
// {} ==> its a target object


// simply spread the objects:
const obj3 = {...obj1, ...obj2};
// console.log(obj3)


//jab bhi DB se value ayegi tb Arr object use karenge:
// mtlb arr ke andar bhot sare objects
const users = [
    {
    id:1,
    email : "jatin@gmail.com"
    }
,
    {
        id:2,
        email : "some@gmail.com"
    }
,
    {
        id:3,
        email : "js@gmail.com"
    }

]
console.log(users[1].email);

console.log(Object.keys(tinderUser));
//it return all the keys of an Object in array:

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser ));