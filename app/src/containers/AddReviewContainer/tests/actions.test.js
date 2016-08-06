import expect from 'expect';
import {
  addReviewDefaultAction,
} from '../actions';
import {
  ADDREVIEW_DEFAULT_ACTION,
} from '../constants';

describe('AddReview actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: ADDREVIEW_DEFAULT_ACTION,
      };
      expect(addReviewDefaultAction()).toEqual(expected);
    });
  });
});
