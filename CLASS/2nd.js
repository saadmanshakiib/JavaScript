const person = {
    firstname : "Sadman",
    lastname : "Sakib",
    age : 22,
    fullname : function (){
        return this.firstname+this.lastname;
    }
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
let Fullname = person.fullname();
console.log(Fullname);