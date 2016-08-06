import expect from 'expect';
import {
  reviewGridDefaultAction,
} from '../actions';
import {
  REVIEWGRID_DEFAULT_ACTION,
} from '../constants';

describe('ReviewGrid actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: REVIEWGRID_DEFAULT_ACTION,
      };
      expect(reviewGridDefaultAction()).toEqual(expected);
    });
  });
});
