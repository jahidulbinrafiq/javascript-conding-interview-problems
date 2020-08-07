//map
const numbers=[1,2,3,4,5,6,7,8,9];

// syntax=> numbers.map(function())
//using function in map

/*
const square1=numbers.map(function(element){
    return element*element;
});
console.log(square1);
*/

//using arrow function  in map

/*
const square=numbers.map(element=>element*element);
console.log(square);
*/
//using filter==>

//using function in filter
/*
const biggerNumbers=numbers.filter(function(element){
    return element>6;
});
console.log(biggerNumbers);
*/
//using arrow function in filter

const biggerNumbers1=numbers.filter(element=>element>6);
console.log(biggerNumbers1);

//using find

const findBiggerElement=numbers.find(element=> element>6);
console.log(findBiggerElement);