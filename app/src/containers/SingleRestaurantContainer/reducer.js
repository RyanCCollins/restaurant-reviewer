import {
  REVIEWS_LOAD_INITIATION,
  REVIEWS_LOAD_SUCCESS,
  REVIEWS_LOAD_FAILURE,
  ADD_REVIEW_INITIATION,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  REVIEWS_ERRORS,
} from './constants';

const initialState = {
  singleRestaurant: {
    reviews: [],
    errors: [],
    isLoading: false,
  },
};

const singleRestaurant =
  (state = initialState, action) => {
    switch (action.type) {
      case REVIEWS_LOAD_INITIATION:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case REVIEWS_LOAD_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          reviews: action.reviews,
        });
      case REVIEWS_LOAD_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
          errors: [...action.error],
        });
      case ADD_REVIEW_INITIATION:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case ADD_REVIEW_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          reviews: [
            ...state.reviews,
            ...action.review,
          ],
        });
      case ADD_REVIEW_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
          errors: [...action.error],
        });
      case REVIEWS_ERRORS:
        return Object.assign({}, state, {
          errors: action.errors,
        });
      default:
        return state;
    }
  };

export default singleRestaurant;
