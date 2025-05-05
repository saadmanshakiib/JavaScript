class Car{
constructor(name,brand,color,price){
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
}

 setName(name){
    this.name = name;
}
setColor(color){
    this.color = color;
}

setBrand(brand){
    this.brand = brand;
}
setPrice(price){
    this.price = price;
}

getName(){
    return this.name;
}
getBrand(){
    return this.brand;
}
getColor(){
    return this.color;
}
getPrice(){
    return this.price;
}

}

c = new Car();
c.setName("Nissan GTR");
c.setBrand("Nissan");
c.setPrice(12900000);
c.setColor("Black");


console.log(c.getName());
console.log(c.getBrand());
console.log(c.getColor());
console.log(c.getPrice());


