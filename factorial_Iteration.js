/**
 * The iterative approach
 * Pro: Takes less memory than the recursive implementation
 * Con: The code is lengthier than that of the recursive implementation
 */


    /**  
        let factorial=1;//intial value
        let num=4;//find the factorial of 4
        for (let i=num;i>=1;i--){
        console.log(factorial," X",i,"=",factorial*i)
        factorial*=i;

        }
        
        console.log(factorial); 

  */


//making it for  multiple value

function factorialIteration(value){
    let answer=1;
    if(value==0 || value==1){
        return answer;
    }else{
        for (let i=value;i>=1;i--){
            answer*=i; 
        }
        return answer;
    }
}
console.log("Factorial for 4: ",factorialIteration(4));
console.log("Factorial for 5: ",factorialIteration(5));

