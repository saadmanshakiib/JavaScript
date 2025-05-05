console.log("Map");

let m = new Map([
    ["sadman",53467],
    ["sakib",120438],
    ["sadat",53435]
]);

//use get() to get the key of the map

console.log(m.get("sadman"));
console.log(m.get("sakib"));

let size = m.size;
console.log(size);

//delete = to delete a map
m.delete("sadman");
console.log(m);
 let check = m.has("sadat")
 console.log(check);

 //for each = invokes a callback for each key or value or maybe both of the map

 let l = "";
 m.forEach(list);
 function list(value,key){
    l += key + " : " + value;
    l += '\n';
 }
 console.log(l);

 //check entries

var entries =  m.entries();
console.log(entries);

//list all entries using for each

let l2 = "";
m.forEach(listAllEntries);
function listAllEntries(values){
    for(let x of entries){
        l2 += entries;
    }
}
console.log(l2);

//list all keys

let l3 = "";
for(let x of m.keys()){
    l3 += x;
    l3 += " ";
}
console.log(l3);

//list all values
let l4 = "";
for(let x of m.values()){
    l4 += x;
    l4 = " ";
}
console.log(l4);