//es6 introduce default parameter
function add (num,num2=20){

    //use it before es6
    /*
    if(num2==undefined){
        num2=20;
    }
    */

    //It also use it before es6
    // num2=num2||20;

    return num +num2;
}
console.log(add(10));