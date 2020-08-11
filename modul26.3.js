const person={
    firstName:'rahim',
    'last Name':'Khan',
    salary:50000,
    getFullName(){
        console.log(`${this.firstName} ${this["last Name"]}`)
    },
    chargeBill(amount){
        return (`${this.salary-amount}`)
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
const chargeBillHero=person.chargeBill.bind(heroPerson);
console.log(chargeBillHero(2000));
console.log(heroPerson.salary);