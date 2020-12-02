'use strict';

describe('thermostat', () => {
  let thermostat;

  beforeEach( () => {
    thermostat = new Thermostat();
  });

  describe('temperature', () => {

    it('starts at 20', () => {
      expect(thermostat.temperature).toEqual(20)
    });

    it('temp increases by 1 when user clicks increase', () => {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21)
    });

    it('temp decreases by 1 when user click decrease', () => {
      thermostat.descreaseTemp();
      expect(thermostat.temperature).toEqual(19)
    });
  });
});
