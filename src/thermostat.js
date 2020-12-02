'use strict';

class Thermostat{
  constructor() {
    this.temperature = 20
  }

  increaseTemp() {
    return this.temperature++
  }

  descreaseTemp() {
    return this.temperature--
  }
}
