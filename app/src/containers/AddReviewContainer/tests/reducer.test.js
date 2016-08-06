import expect from 'expect';
import addReviewReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('addReviewReducer', () => {
  it('returns the initial state', () => {
    expect(
      addReviewReducer(undefined, {})
    ).toEqual(initialState);
  });
});
