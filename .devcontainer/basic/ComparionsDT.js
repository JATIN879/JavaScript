// console.log(2>3);
// console.log("2">1);
// console.log("02">1);

// console.log(null == 0);
// console.log(null > 0);
// console.log(null <= 0);

NOTE:
//the reason is that an equality check(==) and commparisions
// > < >= <= works differntly/\.
// comparisions convert null to a number.treating it as 0.
// that's why (3) null >=0 and (1)null >0 is false.


// ===(it is check the datatype and value too)

console.log("2"===2);