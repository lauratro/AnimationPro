class Tv {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }
  volumeUp(amount) {
    this.volume += amount;
    if (this.volume == 100) {
    }
  }
  volumeDown(amount) {
    this.volume -= amount;
  }
  volumeMin() {
    this.volume = 0;
  }
  volumeMax() {
    this.volume = 100;
  }
  setChannel(value) {
    this.channel = value;
    if (this.channel > 50) {
      this.channel = 50;
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

console.log(tv.status());
console.log(tv.volume);

window.onload = () => {
  displayDetails();
  manageVol();
  resetChannelVolume();
  channelValue();
};
let increaseButton = document.getElementById("increase-volume");
let decreaseButton = document.getElementById("decrease-volume");
const displayDetails = () => {
  let brandTv = document.getElementById("tv-brand");
  brandTv.innerHTML = tv.brand;
  let channelTv = document.getElementById("tv-channel");
  channelTv.innerHTML = tv.channel;
  let volumeTv = document.getElementById("tv-volume");
  volumeTv.innerHTML = tv.volume;
};

const manageVol = () => {
  increaseButton.addEventListener("click", () => {
    increase();
  });

  decreaseButton.addEventListener("click", () => {
    decrease();
  });
};
const resetChannelVolume = () => {
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => {
    resetValues();
  });
};

const channelValue = () => {
  const channelNumber = document.getElementById("channel");
  const channelButton = document.getElementById("change-channel");
  channelNumber.setAttribute("value", 5);
  channelButton.addEventListener("click", () => {
    setChannelNumber(channelNumber.value);
  });
  console.log("channel", channelNumber);
  //setChannelNumber(channelNumber);
};
let increase = () => {
  tv.volumeUp(10);
  console.log(tv.volume);
  disabledButton();
  displayDetails();
};
let decrease = () => {
  tv.volumeDown(10);
  disabledButton();
  displayDetails();
};
let disabledButton = () => {
  if (tv.volume == 100) {
    increaseButton.setAttribute("disabled", true);
  } else if (tv.volume < 100) {
    increaseButton.removeAttribute("disabled");
  }
  if (tv.volume == 0) {
    decreaseButton.setAttribute("disabled", true);
  } else if (tv.volume > 0) {
    decreaseButton.removeAttribute("disabled");
  }
};
const resetValues = () => {
  tv.resetAll();
  displayDetails();
};
const setChannelNumber = (e) => {
  tv.setChannel(e);
  displayDetails();
};
