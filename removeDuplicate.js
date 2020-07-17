let id=[1,3,5,67,40,45,80,100,4,3,2,1,100,30,34,56,46];
let filterList=[];
for(let i=0;i<id.length;i++){
    let element=id[i];
    let index=filterList.indexOf(element);
    if(index==-1){
        filterList.push(element);
    }
}
console.log(filterList);