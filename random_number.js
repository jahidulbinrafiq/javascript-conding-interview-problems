// create an array of five random number 1 to 5;

let rands=[],
    count=1;
const size=5;

while(count<=size){
    rands.push(Math.round(Math.random()*(5-1)+1));
    count++;
}
console.log(rands);