class vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }    
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }

    print() {
        console.log("Name : " + this.name);
        console.log("Price : " + this.price);
        console.log("\n");
    }
}

class car extends vehicle {
    constructor(name, price, model) {
        super(name, price);
        this.model = model;
    }
    setModel(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }

    print() {
        super.print();
        console.log("Model : " + this.model);
    }
}

let c = new car("Nissan", 1200000, "New Model");
c.print();

let v = new vehicle("Fazer", 300000);
v.print();
