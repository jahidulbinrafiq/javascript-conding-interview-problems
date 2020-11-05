// let id=[1,3,5,67,40,45,80,100,4,3,2,1,100,30,34,56,46];
// let filterList=[];
// for(let i=0;i<id.length;i++){
//     let element=id[i];
//     let index=filterList.indexOf(element);
//     if(index==-1){
//         filterList.push(element);
//     }
// }
// console.log(filterList);



let marks=[10,30,35,45,67,89,90,100,99,99,5,5,101];
let uniqueValue=[]
for (const iterator of marks) {
    if(uniqueValue.indexOf(iterator)===-1){
        uniqueValue.push(iterator)
    }
}
console.log(uniqueValue)
