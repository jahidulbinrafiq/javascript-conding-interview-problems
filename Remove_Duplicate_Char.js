const str='Hello jamall kah';
const result =str.split(' ').join('')
const str1=[]
for (const iterator of result) {
    if(str1.indexOf(iterator)==-1){
        str1.push(iterator)
    }
}
console.log(str1.join(''))