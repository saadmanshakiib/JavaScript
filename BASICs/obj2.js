let car = new Object();
car.name = "Toyota";
car.price = 289000;
car.color = "Red";
car.rating = 4.5;
console.log("Car Name : "+car.name);
console.log("Car Price : "+car.price);
console.log("Car Rating : "+car.rating);
console.log("Car Color : "+car.color+"\n");

//defining objects 

const car2 = {
    name: "Premio",
    price : 4000000,
    color : "White"
};

console.log("Car Name : "+car2.name);
console.log("Car Price : "+car2.price);
console.log("Car Color : "+car2.color);

// deleting  property
delete car.rating;
console.log("Car Rating : "+car.rating);


