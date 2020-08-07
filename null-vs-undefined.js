// undefined:indicates that a variable has not been assigned a value, or not declared at all.

// undefined example:1 
let name;
console.log(name);


// undefined example:2

function add(num,num1){
    console.log(num+num1);
}
console.log(add(18,23));

// undeined example:3

function add(num,num1){
    return
}
console.log(add(20,34));

// undefined example:4

function say(message){
    return message;
}
console.log(say());


// undefined example:5
let obj={
    name:'jokir uddin',
    phone:2345
};
console.log(obj.address);

// undefined example:6

let computers=['dell','hp','apple'];
console.log(computers[30]);

// undefined example:7

let set=undefined;
console.log(set);

// null=>empty

let okay=null;
console.log(okay);
