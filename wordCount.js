// let str="Hello! Programmer, I am trying to learn javascript with online source";
// let count=0;
// for (let i=0;i<str.length;i++){
//     let word=str[i];
//     if(word.indexOf(' ')>=0 & str[i-1]!=" "){
//         count++;
//     }
// }
// count++;
// console.log(count);

let str="Hello! Programmer, I am trying to learn javascript with online source";
let count=str.split(' ');
console.log(count.length);