// arr declaration method one
const arr =[0,1,2,3,4,5]
// console.log(arr[6]);

//arr declaration method two by making object type

const arr2 = new Array(1,2,3,4)
//console.log(arr[2]);

//console.log(arr2.length);



// ----------Array methods--------

// arr.push(90); //add ele. at last in arr
// arr.pop();  //delete last value default
// console.log(arr);


// arr.unshift(7656757585); //add ele. at starting
// arr.shift();//remove ele. from starting
// arr.shift();

//console.log(arr.includes(3)); //value arr mai hai ya nahi ye batata hai 
//console.log(arr.indexOf(8));

// const newArr = arr.join();//converts arr into String
// console.log(newArr);
// console.log(typeof newArr)
// console.log(arr);



// slice and splice methods**

console.log("A ", arr);
const n1 =  arr.slice(1,3);//cut the arr from starting to (ending position-1) and return its shallow copy 
console.log(n1)
console.log("B ",arr);


const n2 = arr.splice(1,3);//cut the arrr  from st to end(included) 
console.log(n2);
console.log("C ",arr);

