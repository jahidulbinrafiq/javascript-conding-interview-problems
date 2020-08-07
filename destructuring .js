// destructuring: unpack arrays or objects into a buch of variables

//object destructing
/*
const person={
    name:'albert tom',
    phone:11246,
    gfName:'willa',
    address:'USA',
    job:'facebooking',
    age:34
};
const {gfName,phone,address}=person;
console.log(address);


const complexObject={
    name:'apu khan',
    info:{
        address:'cumilla',
        leader:'tiger'
    }
};
const {leader}=complexObject.info;
console.log(leader);
*/

//array destructing

const friends=
['karim khan','jamal khan','jomir uddin','sokir uddin','razu bhai','apu khan','tiger'];

const[firstIndex,lastIndex,...restFriends]=friends;
console.log(firstIndex);
console.log(lastIndex);
console.log(restFriends);