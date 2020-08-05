// Reverse a string using a JavaScript stack

function reverse(str){
    let stack=[];
    //push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseString = '',
        lengthOfStack=stack.length;
    for (let index = 0; index <lengthOfStack; index++) {
        reverseString+=stack.pop();
    }
    // while (stack.length > 0) {
    //     reverseStr += stack.pop();
    // }
    return reverseString;
}

console.log(reverse('JavaScript danger'));