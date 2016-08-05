import expect from 'expect';
import signupReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('signupReducer', () => {
  it('returns the initial state', () => {
    expect(
      signupReducer(undefined, {})
    ).toEqual(initialState);
  });
});
