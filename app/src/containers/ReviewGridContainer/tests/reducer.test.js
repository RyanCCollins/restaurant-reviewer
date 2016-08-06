import expect from 'expect';
import reviewGridReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('reviewGridReducer', () => {
  it('returns the initial state', () => {
    expect(
      reviewGridReducer(undefined, {})
    ).toEqual(initialState);
  });
});
