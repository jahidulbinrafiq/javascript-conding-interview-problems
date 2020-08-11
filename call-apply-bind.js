const person={
    firstName:'rahim',
    'last Name':'Khan',
    salary:50000,
    getFullName(){
        console.log(`${this.firstName} ${this["last Name"]}`)
    },
    chargeBill(amount,tips,tax){
          console.log(this);
          this.salary=this.salary-amount-tips-tax;
          return (this.salary)
    }
};
const heroPerson={
    firstName:'hero',
    lastName:'alom',
    salary:20000
};
const anotherPerson={
    firstName:'sakib',
    lastName:'khan',
    salary:15000
};
//bind==>return a function then we set arguments
/*
const chargeBillHero=person.chargeBill.bind(heroPerson);
console.log(chargeBillHero(2000));
*/

//call directly work in this method it directly called
//call requires the arguments to be passed in one-by-one
/*
person.chargeBill.call(heroPerson,2000,300,23)
console.log(heroPerson.salary);
*/


//apply passed argument as array from the second argument
//apply takes the arguments as an array.

person.chargeBill.apply(heroPerson,[2000,300,23])
console.log(heroPerson.salary);
