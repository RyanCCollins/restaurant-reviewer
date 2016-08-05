import expect from 'expect';
import signinReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('signinReducer', () => {
  it('returns the initial state', () => {
    expect(
      signinReducer(undefined, {})
    ).toEqual(initialState);
  });
});
