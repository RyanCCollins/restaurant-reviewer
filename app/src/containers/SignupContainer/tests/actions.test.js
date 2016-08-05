import expect from 'expect';
import {
  signupDefaultAction,
} from '../actions';
import {
  SIGNUP_DEFAULT_ACTION,
} from '../constants';

describe('Signup actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: SIGNUP_DEFAULT_ACTION,
      };
      expect(signupDefaultAction()).toEqual(expected);
    });
  });
});
