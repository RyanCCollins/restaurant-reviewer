import {
  TOGGLE_ADD_REVIEW,
  ADD_REVIEW_INVALID,
} from './constants';

const initialState = {
  isAddingReview: false,
  error: {},
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
      default:
        return state;
    }
  };

export default addReviewReducer;
