import {
  TOGGLE_ADD_REVIEW,
  ADD_REVIEW_INVALID,
  CLEAR_ADD_REVIEW_ERRORS,
} from './constants';

// toggleAddReview :: None -> {Action}
export const toggleAddReview = () => ({
  type: TOGGLE_ADD_REVIEW,
});

// addReviewInvalid :: Error -> {Action}
export const addReviewInvalid = (error) => ({
  type: ADD_REVIEW_INVALID,
  error,
});

// clearAddReviewErrors :: None -> {Action}
export const clearAddReviewErrors = () => ({
  type: CLEAR_ADD_REVIEW_ERRORS,
});
