import {
  REVIEWS_LOAD_INITIATION,
  REVIEWS_LOAD_SUCCESS,
  REVIEWS_LOAD_FAILURE,
  ADD_REVIEW_INITIATION,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  REVIEWS_ERRORS,
  OPEN_FULL_REVIEW,
  CLOSE_FULL_REVIEW,
  LOAD_INITIAL_REVIEWS,
} from './constants';

const initialState = {
  singleRestaurant: {
    reviews: [],
    errors: [],
    isLoading: false,
    selectedRestaurant: null,
    selectedReviewId: null,
  },
};

const singleRestaurant =
  (state = initialState, action) => {
    switch (action.type) {
      case REVIEWS_LOAD_INITIATION:
        return Object.assign({}, state, {
          isLoading: true,
          selectedRestaurant: action.selectedRestaurant,
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
        console.log(`Calling add review success with ${JSON.stringify(action.review)}`)
        return Object.assign({}, state, {
          isLoading: false,
          reviews: [
            action.review,
            ...state.selectedRestaurant.reviews,
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
      case OPEN_FULL_REVIEW:
        return Object.assign({}, state, {
          selectedReviewId: action.review,
        });
      case CLOSE_FULL_REVIEW:
        return Object.assign({}, state, {
          selectedReviewId: null,
        });
      case LOAD_INITIAL_REVIEWS:
        return Object.assign({}, state, {
          reviews: action.reviews,
        });
      default:
        return state;
    }
  };

export default singleRestaurant;
