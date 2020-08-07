//spread operator allows us to extend elements

//1)Concatenating arrays

/*
const age=[12,13,14,16,134];
const age1=[15,16,31];
const age2=[56,50,45,35]

//previous es6 version

const allAges=age.concat(age1).concat(age2);
console.log(allAges);

//using of spread operator


const result=[...age,...age1,...age2]
console.log(result);
*/

//2) Copying an array

/*
const computers=['dell','hp','microsoft','dcl','asus','lenovo'];
const addComputer=[...computers];
console.log(addComputer);

*/

//3)using of math function:

/*
const studentMark=45,
      studentMark2=56,
      studentMark3=67;
const maximumNumber=Math.max(studentMark,studentMark2,studentMark3);
console.log(maximumNumber);

const studentMarks=[45,45,67,57,100,89,90,68];
const findMax=Math.max(...studentMarks);
console.log(findMax);
*/

//4)Spreading elements together with an individual element
/*
const computers=['dell','hp','microsoft','dcl','asus','lenovo'];
const addComputer=['walton',...computers];
console.log(addComputer);
*/

//5) Spread syntax for object literals

let obj1={
    name:'jokir Uddin',
    address:'Dhaka',
    id:12345
};
let obj2={
    age:34,
    country:'Bangladesh'
};

let result={...obj1,...obj2};
console.log(result);