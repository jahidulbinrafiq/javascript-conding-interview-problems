//check a number is prime or not

function checkPrime(number){
    for(let i=2;i<number;i++){
        if(number%i===0){
            return "Oops! Not a prime number";
        }
    }
    return "Is prime";
}
console.log(checkPrime(12));
console.log(checkPrime(37));






