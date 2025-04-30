var a = [34,21,56,78,54,51,89,43];
console.log(a);

a.sort();
console.log('after sorting : '+a);

a.reverse();
console.log('reversing array : '+a);

//toSorted() method creates a new array
//sort() method doesnt
 
const a2 = a.toSorted();
console.log(" new array : "+a2);

//same for the reversed array
const a3 = a.toReversed();
console.log("new reversed array : "+a3);

var a4 = [45,67,32,41,89,64];
a4.sort(function(a,b){ return a-b;})
console.log(a4);//ascending

var a5 = [11,88,66,32,80,42];
a5.sort(function(a,b){ return b-a;})//descending
console.log(a5);