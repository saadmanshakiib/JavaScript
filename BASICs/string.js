console.log("String")

let str = "Sadman Sakib";
let str2 = 'sadman al sakib nissan';

console.log(str);
console.log(str2);

let length = str.length;
let length2 = str2.length;

console.log(length);
console.log(length2);

//defining strings as objects 

let str3 = new String("Aline");
console.log(str3);
let charAt = str3.charAt(3);
console.log(charAt);
//

let str4 = new String("Studying in 4th semester in while my friends are in 4th year ");
let index = str4.indexOf("4th");
console.log("Index of the word 4th : "+index);
console.log("Last Index of the word 4th : "+str4.lastIndexOf("4th"));

let search = str4.search("year");
console.log("Searching year : "+search);

console.log(str2.match("sa"));



