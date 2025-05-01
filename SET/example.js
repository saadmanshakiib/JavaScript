console.log("Set")

const words = new Set([12,34,44,44,56,67,31]);
console.log(words);

words.add(10);
console.log(words);

let ans = "";
for(let x of words){
ans += x;
}
console.log(ans);

let y = 0;
words.forEach(sum);
function sum(elements){
    y += elements;
}
console.log(y);