let numbers = findMax(1, 123, 500, 115,2000, 44, 88,1000);
function findMax(){
    let max=arguments[0];
    for (let index = 0; index < arguments.length; index++) {
        // console.log("max number before compare:",max)
        // console.log("arguments numbers: ",arguments[index]);
         if(max<arguments[index]){
             max=arguments[index];
 
         }   
    }
    return(max);
}

console.log(numbers);