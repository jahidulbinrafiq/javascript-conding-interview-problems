//fibonacci recursive solution

function fibonacci(value){
    if(value===0){
       return 0;
    }
    else if(value===1){
        return 1;
    }
    else{
        return fibonacci(value-1)+fibonacci(value-2);
    }
}
console.log(fibonacci(10));