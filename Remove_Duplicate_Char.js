const str='Hello jamall kah';

//way 1:
/*
let str1='';
for(let index=0;index<str.length;index++) {
    if(str1.indexOf(str[index])==-1){
        str1+=str[index];
    }
    str1+=' ';
}
console.log(str1);
*/

//way 2
/*
const result =str.split(' ').join('')
const str1=[]
for (const iterator of result) {
    if(str1.indexOf(iterator)==-1){
        str1.push(iterator)
    }
}
console.log(str1.join(''))
*/

//way 3

let str1=''
for (const index in str){
    if(str1.indexOf(str[index])==-1 || str[index]==' '){
        str1+=str[index]
    }
}
console.log(str1)