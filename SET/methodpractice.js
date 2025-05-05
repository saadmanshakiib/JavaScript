console.log("set methods practice")

const myset = new Set();
myset.add(34);
myset.add(12);
myset.add(88);
myset.add(22);
myset.add(12);
myset.add(34);
myset.add(61);
myset.add(21);
myset.add(89);
console.log(myset);

//list all set using foreach
let list = "";
myset.forEach(List);
function List(element){
    list += element;
    list += " ";
}
console.log(list);

//sum all using loop of

let sum = 0;
for(let y of myset){
    sum += y;
}
console.log(sum);

//getall values 
const all = myset.values();
console.log(all);

const entries = myset.entries();
console.log(entries);