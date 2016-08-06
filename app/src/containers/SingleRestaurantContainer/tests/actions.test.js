import expect from 'expect';
import {
  singleRestaurantDefaultAction,
} from '../actions';
import {
  SINGLERESTAURANT_DEFAULT_ACTION,
} from '../constants';

describe('SingleRestaurant actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: SINGLERESTAURANT_DEFAULT_ACTION,
      };
      expect(singleRestaurantDefaultAction()).toEqual(expected);
    });
  });
});
