import expect from 'expect';
import {
  restaurantsGridDefaultAction,
} from '../actions';
import {
  RESTAURANTSGRID_DEFAULT_ACTION,
} from '../constants';

describe('RestaurantsGrid actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: RESTAURANTSGRID_DEFAULT_ACTION,
      };
      expect(restaurantsGridDefaultAction()).toEqual(expected);
    });
  });
});
