import expect from 'expect';
import restaurantsGridReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('restaurantsGridReducer', () => {
  it('returns the initial state', () => {
    expect(
      restaurantsGridReducer(undefined, {})
    ).toEqual(initialState);
  });
});
