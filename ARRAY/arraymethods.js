var a = [22,45,321,67,854,124,897]

console.log("ArrayAt(4) = "+a.at(4));

console.log(a.pop());
console.log(a);

a.push(99);
console.log(a)

a.shift(); //-> this removes the first index and shifts all the elements one step closer
console.log(a);

a.unshift(66); //-> this adds an element at the beginning and shifts the elements one index higher
console.log(a);

//update elements:
a[0] = 1;
console.log(a);

var a2 = [33,44,12,567,54,22]
var a3 = a.concat(a2); //-> merging
console.log(a3);
