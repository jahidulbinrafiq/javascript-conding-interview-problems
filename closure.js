/*
closure:Is a function having access to the parent scope,even after parent function has closed
*/

function sotpWatch(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const clock1=sotpWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2=sotpWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
