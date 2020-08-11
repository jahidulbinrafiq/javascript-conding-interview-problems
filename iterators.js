/**
 * .forEach()=> is used to execute the same code on every element in an array but does not    change the array and returns undefined.
 * 
 * .map()=>executes the same code on every element in an array and returns a new array with the updated elements.
 * 
 * .filter()=>checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
 * 
 * 
 */

 //using of every /some /filter
 /*
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some(word => {
  return word.length < 6;
}));
const interestingWords=words.filter(word=>word.length>5);
console.log(interestingWords.every(word=>word.length>5));
*/
//using findIndex
/*
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});
*/
//map
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage=animals.map(animal=> 
animal[0]);
console.log(secretMessage.join(''));
