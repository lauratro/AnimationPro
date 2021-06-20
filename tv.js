class Tv {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }
  volumeUp(amount) {
    this.volume -= amount;
  }
  volumeDown(amount) {
    this.volume += amount;
  }
  volumeMin() {
    this.volume = 0;
  }
  volumeMax() {
    this.volume = 100;
  }
  setChannel() {
    this.channel += 1;
    if (this.channel === 50) {
      this.channel += 0;
    }
  }
  resetAll() {
    this.volume = 50;
    this.channel = 1;
  }

  status() {
    return (
      "Brand: " +
      this.brand +
      " volume " +
      this.volume +
      " at channel " +
      this.channel
    );
  }
}

//1) Create a TV class with properties like brand, channel and volume.
//    Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
//2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
//3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
//4) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
//5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
const tv = new Tv("Panasonic");
console.log(tv.status());

window.onload = () => {
  displayDetails();
};
const displayDetails = () => {
  let brandTv = document.getElementById("tv-brand");
  brandTv.innerHTML = tv.brand;
  let channelTv = document.getElementById("tv-channel");
  channelTv.innerHTML = tv.channel;
};
