console.log("Arrow");
let square = (a) => a * a;
let ans = square(22);
console.log(ans);

//multiplication
let multiplication = (a,b,c) => a*b*c;
let mul = multiplication(34,67,88) 

console.log(mul);
//multiline

let Check = mul => {
    if(mul%2 == 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}
let check =  Check(mul);
console.log(check);