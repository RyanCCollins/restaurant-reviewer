import {
  TOGGLE_ADD_REVIEW,
} from './constants';

const initialState = {
  isAddingReview: false,
};

const addReviewReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_ADD_REVIEW:
        return Object.assign({}, state, {
          isAddingReview: !state.isAddingReview,
        });
      default:
        return state;
    }
  };

export default addReviewReducer;
