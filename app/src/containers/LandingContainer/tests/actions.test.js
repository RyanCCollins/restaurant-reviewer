import expect from 'expect';
import {
  landingDefaultAction,
} from '../actions';
import {
  LANDING_DEFAULT_ACTION,
} from '../constants';

describe('Landing actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LANDING_DEFAULT_ACTION,
      };
      expect(landingDefaultAction()).toEqual(expected);
    });
  });
});
