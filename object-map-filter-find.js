const students=[
    {id:32,name:'omar sunny'},
    {id:25,name:'Munna'},
    {id:35,name:'adnan'},
    {id:45,name:'dipjol'},
    {id:20,name:"karim"}
]

const result=students.map(st=>st.name);
console.log(result);

const biggerNumber=students.filter(st=> st.id > 20);
console.log(biggerNumber);

const findBiggerelement=students.find(st=>st.id>20);
console.log(findBiggerelement);