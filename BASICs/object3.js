
//use of constructor
function Person(firstName, lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const me = new Person("Sadman","Shakib",22);
const father = new Person("Younus","Ali",48);
const mama = new Person("AGM","Tazim",31);

console.log("My Info : \n");
console.log(me.firstName);
console.log(me.lastName);
console.log(me.age);

console.log("Abbu Info : \n");
console.log(father.firstName);
console.log(father.lastNafather);
console.log(father.age);

console.log("Mama Info : \n");
console.log(mama.firstName);
console.log(mama.lastName);
console.log(mama.age);

