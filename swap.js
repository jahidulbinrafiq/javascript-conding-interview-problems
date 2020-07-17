//swap two variable

//Using thrid variable

/** 
   let a=10,
    temp,
     b=30;
    console.log("Before swap:",a," | ",b)
    temp=a;
    a=b;
    b=temp;
    console.log("After Swap:",a," | ",b)
*/

//without using thrid variable

/**
        let a=10,
            b=30;
        console.log("Before swap:",a," | ",b)
        a=a+b;
        b=a-b;
        a=a-b;
        console.log("After Swap:",a," | ",b)

 */

 // In javascript way solve

 let a=10,
    b=30;
console.log("Before swap:",a," | ",b);
[a,b]=[b,a];
console.log("After Swap:",a," | ",b);

