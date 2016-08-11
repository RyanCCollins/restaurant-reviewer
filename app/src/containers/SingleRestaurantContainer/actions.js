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
} from './constants';
const baseUrl = 'https://restaurant-reviewer-api.herokuapp.com/api/v1/';
const reviewsUrl = (restaurantId) => `${baseUrl}restaurants/${restaurantId}/reviews/`;
const singleReview = (restaurantId, id) => `${reviewsUrl(restaurantId)}${id}`;
import fetch from 'isomorphic-fetch';

const headers = new Headers({
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
});

const getOptions = {
  method: 'GET',
  headers,
  mode: 'no-cors',
};

// closeFullReview :: None -> {Action}
export const closeFullReview = () => ({
  type: CLOSE_FULL_REVIEW,
});

// openFullReview :: {Object} -> {Action}
export const openFullReview = (review) => ({
  type: OPEN_FULL_REVIEW,
  review,
});

// loadReviewsInitiation :: None -> {Action}
const loadReviewsInitiation = (restaurantId) => ({
  type: REVIEWS_LOAD_INITIATION,
  selectedRestaurantId: restaurantId,
});

// loadReviewsSuccess :: [JSON] -> {Action}
const loadReviewsSuccess = (reviews) => ({
  type: REVIEWS_LOAD_SUCCESS,
  reviews,
});

// loadReviewsFailure :: JSON -> {Action}
const loadReviewsFailure = (error) => ({
  type: REVIEWS_LOAD_FAILURE,
  error,
});

// reviewsErrors :: [Obj] -> {Action}
export const reviewsErrors = (errors) => ({
  type: REVIEWS_ERRORS,
  errors,
});

// loadReviews :: Integer -> Func -> Action -> Action Success : Failure
export const loadReviews = (restaurantId) =>
  (dispatch) => {
    dispatch(
      loadReviewsInitiation(restaurantId)
    );
    fetch(
      reviewsUrl(restaurantId),
      getOptions,
    )
    .then(data => data.json()).then(data => {
      dispatch(
        loadReviewsSuccess(data.reviews)
      );
    })
    .catch(err => {
      dispatch(
        loadReviewsFailure(err)
      );
    });
  };

// addReviewInitiation :: None -> {Action}
const addReviewInitiation = () => ({
  type: ADD_REVIEW_INITIATION,
});

// addReviewSuccess :: JSON -> {Action}
const addReviewSuccess = (review) => ({
  type: ADD_REVIEW_SUCCESS,
  review,
});

// addReviewFailure :: JSON -> {Action}
const addReviewFailure = (error) => ({
  type: ADD_REVIEW_FAILURE,
  error,
});

// addReviewData :: JSON -> {Obj}
const addReviewData = (body) => ({
  method: 'POST',
  headers,
  body: JSON.stringify(body),
});

// encodeReview :: {Object} -> Int -> {Object}
const encodeReview = (review, restaurant) => ({
  review: {
    total_stars: review.rating,
    text: review.text,
    restaurant_id: restaurant.id,
    person_attributes: {
      name: review.person,
    },
  },
});

// submitReview :: Int -> JSON -> Func -> Res JSON : Error
export const submitReview = (review, restaurant) =>
  (dispatch) => {
    dispatch(
      addReviewInitiation()
    );
    fetch(
      reviewsUrl(restaurant.id),
      addReviewData(
        encodeReview(review, restaurant)
      )
    )
    .then(res => res.json())
    .then(data => {
      dispatch(
        addReviewSuccess(data.review)
      );
    }).then(_ => {
      dispatch(
        closeFullReview()
      );
    }).then(_ => {
      loadReviews(restaurant.id);
    })
    .catch(error => {
      dispatch(
        addReviewFailure(error)
      );
    });
  };
