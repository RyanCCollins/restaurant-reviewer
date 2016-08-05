import expect from 'expect';
import singleRestaurantReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('singleRestaurantReducer', () => {
  it('returns the initial state', () => {
    expect(
      singleRestaurantReducer(undefined, {})
    ).toEqual(initialState);
  });
});
