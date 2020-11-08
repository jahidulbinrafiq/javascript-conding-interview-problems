//sum of series of squares of numbers
//1+4=5
let number =prompt('Enter the number of term: ');
number=parseInt(number);
let sum=0;
let series=''
for(let i=1;i<=number;i++){
    sum+=i**2;
    series+=(i**2).toString();
    if(i===number){continue;}
    series+=' + '
}
console.log(`${series} = ${sum}`)