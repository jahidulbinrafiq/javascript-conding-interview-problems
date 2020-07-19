/*  A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given number of people, return how many cars are needed to seat everyone comfortably.
*/

function car(passengerNumber){
    return Math.ceil(passengerNumber/5);
}
console.log(car(12));
console.log(car(20));