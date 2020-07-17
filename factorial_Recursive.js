/**
 * The recursive approach
 * Pro: Shorter and cleaner code.
 * Con: Greater memory requirements as all the function calls remain on the stack until the base case is reached.
 */

 function factorial_recursive(value){
    //base case
    if(value===0||value===1){
         return 1;
     }
    //{recursive case
    else{
        return value*factorial_recursive(value-1);
    }
 }
 console.log("Factorial for 4: ",factorial_recursive(4));
 console.log("Factorial for 5: ",factorial_recursive(5));
 console.log("Factorial for 10: ",factorial_recursive(10));