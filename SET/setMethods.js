const nums = new Set([12,34,44,44,56,67,31]);
console.log(nums);
nums.add(89);
console.log(nums);

let check = nums.has(33);
console.log(check);

//list all using foreach
let all = "";
nums.forEach(ListAll);

function ListAll(value){
    all += value;
    all += " ";
}
console.log("listing all : "+all);

//getall values
const allvalues = nums.values();
console.log(allvalues);

//set has no keys
const keys = nums.keys();
console.log(keys);// it will return the same

const entries = nums.entries();
console.log(entries);