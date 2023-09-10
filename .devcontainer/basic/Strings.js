const name = "prashant";
const repoCount =50;


// it is string interpolation
// console.log(`Hello my name is ${name} and repocounts are ${repoCount}`);


const gamename = new String("university");
// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.charAt(4));
//console.log(gameName.indexOf('t'));

// we can give the negative values too in idx(it is start from reverse)
// const an=gamename.slice(-10,4)
// console.log(an);

const newstring = "   hitesh    ";
console.log(newstring);
console.log(newstring.trim());//it removes the starting and ending spaces

const url ="https://jatin.com/hitesh%20chaudhary"

// for replace something in keywords
console.log(url.replace('%20','--'));

// for knowing the keyword
console.log(url.includes('jatin'));

//for split the string
const str = "jatin-rathore-is-the-good"
console.log(str.split('-'));