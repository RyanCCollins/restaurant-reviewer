import expect from 'expect';
import {
  signinDefaultAction,
} from '../actions';
import {
  SIGNIN_DEFAULT_ACTION,
} from '../constants';

describe('Signin actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: SIGNIN_DEFAULT_ACTION,
      };
      expect(signinDefaultAction()).toEqual(expected);
    });
  });
});
