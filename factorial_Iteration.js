//using the iterative approach

// let factorial=1;
// let num=4;
// for (let i=num;i>=1;i--){
//   console.log(factorial," X",i,"=",factorial*i)
//    factorial*=i;

// }
// console.log(factorial);


//making it for  multiple value

function factorialIteration(number){
    let value=1;

    if(number==0 || number==1){
        return value;
    }else{
        for (let i=number;i>=1;i--){
            value*=i; 
        }
        return value;
    }
}
console.log("Factorial for 4: ",factorialIteration(4));
console.log("Factorial for 5: ",factorialIteration(5));
