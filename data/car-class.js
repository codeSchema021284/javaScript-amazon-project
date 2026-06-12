class Car {
    brand;
    model;

    constructor(carDetails) {
     this.brand = carDetails.brand;
     this.model = carDetails.model;
    }

    displayCarDetails(){
        console.log(`Car brand is ${this.brand} and model is ${this.model}`);
    }

    
}
const car1 = new Car({
    brand:'Toyota',
    model:'Corolla'
})
console.log(car1);
car1.displayCarDetails();