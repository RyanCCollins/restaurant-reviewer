import {
  TOGGLE_ADD_REVIEW,
  ADD_REVIEW_INVALID,
  CLEAR_ADD_REVIEW_ERRORS,
} from './constants';

const initialState = {
  isAddingReview: false,
  error: undefined,
};

const addReviewReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_ADD_REVIEW:
        return Object.assign({}, state, {
          isAddingReview: !state.isAddingReview,
        });
      case ADD_REVIEW_INVALID:
        return Object.assign({}, state, {
          error: action.error,
        });
      case CLEAR_ADD_REVIEW_ERRORS:
        return Object.assign({}, state, {
          error: undefined,
        });
      default:
        return state;
    }
  };

export default addReviewReducer;
