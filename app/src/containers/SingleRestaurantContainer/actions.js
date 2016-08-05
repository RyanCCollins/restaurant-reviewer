import {
  REVIEWS_LOAD_INITIATION,
  REVIEWS_LOAD_SUCCESS,
  REVIEWS_LOAD_FAILURE,
  ADD_REVIEW_INITIATION,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
} from './constants';

const baseUrl = `http://0.0.0.0:8080/api/v1/`;
const reviewsUrl = (restaurantId) => `${baseUrl}restaurants/${restaurantId}/reviews/`;
const singleReview = (restaurantId, id) => `${reviewsUrl(restaurantId)}${id}`;

const headers = new Headers({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
});

const getOptions = {
  method: 'GET',
  headers,
  mode: 'no-cors',
};

// loadReviewsInitiation :: None -> {Action}
const loadReviewsInitiation = () => ({
  type: REVIEWS_LOAD_INITIATION,
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

// loadReviews :: Integer -> Func -> Action -> Action Success : Failure
export const loadReviews = (restaurantId) =>
  (dispatch) => {
    dispatch(
      loadReviewsInitiation()
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

const addReviewInitiation = () => ({
  type: ADD_REVIEW_INITIATION,
});

const addReviewSuccess = (review) => ({
  type: ADD_REVIEW_SUCCESS,
  review,
});

const addReviewFailure = (error) => ({
  type: ADD_REVIEW_FAILURE,
  error,
});

const addReviewData = (body) => ({
  method: 'POST',
  headers,
  body: JSON.stringify(body),
});

export const addReview = (restaurantId, review) =>
  (dispatch) => {
    dispatch(
      addReviewInitiation()
    );
    fetch(
      reviewsUrl(restaurantId),
      addReviewData(review)
    )
    .then(data => data.json())
    .then(data => {
      dispatch(
        addReviewSuccess(data.review)
      );
    })
    .catch(error => {
      dispatch(
        addReviewFailure(error)
      );
    });
  };
