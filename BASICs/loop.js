var a = {
    firstname : "Sadman",
    lastname : "Sakib",
    nickname : "Nissan",
    age : 22
};

console.log(a.firstname);
console.log(a.lastname);
console.log(a.nickname);
console.log(a.age);

let t = "";
for(let x in a){
 t += a[x];
}
console.log(t);