/** 

let fibo=[0,1];
for(let i=2;i<=5;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);
*/

function fibonacci(value){
    let fibo=[0,1];
    for(let i=2;i<=value;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

console.log(" ",fibonacci(10));