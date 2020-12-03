'use strict';

describe('thermostat', () => {
  let thermostat;

  beforeEach( () => {
    thermostat = new Thermostat();
  });

  describe('temperature', () => {

    it('starts at 20', () => {
      expect(thermostat.getCurrentTemp()).toEqual(20)
    });

    it('temp increases by 1 when user clicks increase', () => {
      thermostat.up();
      expect(thermostat.getCurrentTemp()).toEqual(21)
    });

    it('temp decreases by 1 when user click decrease', () => {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    });

    it('minimum temp is 10', () => {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });
  });

  describe('power saving mode', () => {

    it('has power saving mode on by default', () => {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch PSM off', () => {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch PSM back on', () => {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can reset to defaul temp', () => {
      for (var i = 0; i < 6; i++ ) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });
  });

  describe('when power saving mode is on', () => {
    it('has a max temp of 25', () => {
      for (var i = 0; i < 6; i++ ) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });
  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });
});
