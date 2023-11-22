class Laptop {
  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
    this.isOn = false;
  }

  get price() {
    return Number(800 - this.info.age * 2 + this.quality * 0.5);
  }

  turnOn() {
    this.quality--;
    this.isOn = true;
  }

  turnOff() {
    this.quality--;
    this.isOn = false;
  }

  showInfo() {
    return JSON.stringify(this.info);
  }
}
