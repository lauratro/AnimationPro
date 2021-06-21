// We define a class Car
class Car {
  // The constructor initializes the properties.
  // It gets called when we do: new Car(somBrand, someModel)
  // We initialize the speed to 0
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.run = "no";
  }

  // Car class methods:
  // (notice that now we don't say "function" and that we
  //  don't put a comma after closing brace of the function)

  accelerate(amount) {
    this.speed += amount;
  }

  brake(amount) {
    if (amount <= this.speed) {
      this.speed -= amount;
    } else {
      // a car cannot go to negative speed
      this.speed = 0;
    }
  }

  stopTheCar() {
    this.speed = 0;
  }

  status() {
    return (
      this.brand + " " + this.model + " running at " + this.speed + " km/h"
    );
  }
  isRunning(amount) {
    if (amount > 0) {
      console.log("the car is running");
      console.log("amount", amount);
      return (this.run = " yes");
    } else {
      console.log("the car is not running");
      console.log("amountno", amount);
      return (this.run = " no");
    }
  }
}

// Now we use create a Car object using the class

const car = new Car("Ford", "Mondeo");

console.log(car.status());

// we make the car accelerate and check it's status
car.accelerate(50);
console.log(car.status());

car.accelerate(100);
console.log(car.status());
//car.isRunning(0);

// now the car will brake and we check the status
car.brake(25);
console.log(car.status());

car.brake(25);
console.log(car.status());

car.brake(10);
console.log(car.status());
//car.isRunning(10);

// at the end of the trip we make the car stop
car.stopTheCar();
console.log(car.status());

// Thanks to class definition we can now create other cars easily
const car2 = new Car("BMW", "Mini Cooper");
car2.accelerate(200);
console.log(car2.status());

// Let's now create my favorite car and display some information about it in the HTML
window.onload = () => {
  const myFavCar = new Car("Nissan", "Micra");
  displayMyFavCar(myFavCar);
  displaySpeed(myFavCar);
  addEvents(myFavCar);
};
const displayMyFavCar = (myFavCar) => {
  const carBrand = document.getElementById("car-brand");
  carBrand.innerHTML = myFavCar.brand;
  const carModel = document.getElementById("car-model");
  carModel.innerHTML = myFavCar.model;
};

const displaySpeed = (myFavCar) => {
  const carSpeed = document.getElementById("car-speed");
  carSpeed.innerHTML = myFavCar.speed;
  const isRunningCar = document.getElementById("car-move");
  isRunningCar.innerHTML = myFavCar.run;
};
const addEvents = (myFavCar) => {
  const accelerateButton = document.getElementById("accelerate");
  accelerateButton.addEventListener("click", () => accelerate(myFavCar));
  const brakeButton = document.getElementById("brake");
  brakeButton.addEventListener("click", () => brake(myFavCar));
  const stopButton = document.getElementById("stop");
  stopButton.addEventListener("click", () => stop(myFavCar));
};
const accelerate = (myFavCar) => {
  myFavCar.accelerate(20);
  myFavCar.isRunning(myFavCar.speed);
  console.log("myfav", myFavCar.speed);
  displaySpeed(myFavCar);
};

const brake = (myFavCar) => {
  myFavCar.brake(20);
  myFavCar.isRunning(myFavCar.speed);
  displaySpeed(myFavCar);
};

const stop = (myFavCar) => {
  myFavCar.stopTheCar();
  displaySpeed(myFavCar);
};

// Create a method inside the class definition that checks wether the Car is running or not and display it in the HTML
