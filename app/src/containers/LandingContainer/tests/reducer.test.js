import expect from 'expect';
import landingReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('landingReducer', () => {
  it('returns the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
});
