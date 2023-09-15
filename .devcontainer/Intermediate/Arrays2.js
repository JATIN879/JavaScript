const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];



// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]);

//  const all_heroes=marvel_heroes.concat(dc_heroes);//combined two or more arr and reuturns new arr
// console.log(marvel_heroes);



//spread operator:  spread the each elemnt
const all_new_heroes = [...marvel_heroes, ...dc_heroes];

//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];


 let real_another_arr = another_array.flat(Infinity); 
 //flat() is used to distribute each value of arr in a single manner
//console.log(real_another_arr);


console.log(Array.isArray())//check,it is array or not

console.log(Array.from("jatin"))//convert String into array


console.log(Array.from({name:"jatin"}));//interview important : ye yha pr ye pta nhi laga paa rha hai ki key ka arr bnana hai ya values to ye always empty arr dega.


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//it returns a new array from set of elements


