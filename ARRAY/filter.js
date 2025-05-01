var a = [23,45,67,43,12,78,76]

let b = a.filter(checkEvenOdd);

function checkEvenOdd(element,index,a){
    if(element%2 == 0) return element;
}
console.log(b);


