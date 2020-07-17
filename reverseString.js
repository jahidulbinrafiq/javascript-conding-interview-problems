//using bulit in object

/* 
    let word="JavaScript";
    let reverseWord=word.split("").reverse().join("");
    console.log(reverseWord);
*/

//without built in object

let word="JavaScript";
let reverseWord="";
for(let i=word.length-1;i>=0;i--){
      reverseWord+=word[i];
}
console.log(reverseWord);