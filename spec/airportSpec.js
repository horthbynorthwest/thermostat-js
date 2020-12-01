'use strict';

describe('Airport', () => {
  var airport;
  var plane;
  var weather;
  beforeEach( () => {
    plane = jasmine.createSpy('plane',['land']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', () => {
    beforeEach( () => {
      weather.isStormy.and.returnValue(false);
    });
    it('can clear planes for landing', () => {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('can clear planes for takeoff', () => {
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });
  describe('under stormy conditions', () => {
    beforeEach( () => {
    weather.isStormy.and.returnValue(true);
  });
    it('does not clear planes for takeoff', () => {
      expect(() => { airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});

// hi Lucy!
