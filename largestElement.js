let marks=[10,30,35,45,67,89,90,100,99,99,5,101];
let maxMarks=[0];
for(let i=1;i<=marks.length;i++){
    if(maxMarks>marks[i]){
        maxMarks=marks[i];
    }
}
console.log(maxMarks);