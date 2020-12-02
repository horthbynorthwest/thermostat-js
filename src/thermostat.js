'use strict';

class Thermostat{

  constructor() {
    this.MINIMUM_TEMP = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this._temperature = 20;
    this.powerSavingMode = true;
  }

  getCurrentTemp() {
    return this._temperature
  }

  increaseTemp() {
    if(this.isMaxTemp()) {
      return;
    }
    return this._temperature += 1;
  }

  descreaseTemp() {
    if(this.isMinimumTemp()) {
      return;
    }
    return this._temperature -= 1;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  isMinimumTemp() {
    return this._temperature === this.MINIMUM_TEMP;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  isMaxTemp() {
    if(this.isPowerSavingModeOn() === false){
      return this._temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this._temperature === this.MAX_LIMIT_PSM_ON;
  }
}
