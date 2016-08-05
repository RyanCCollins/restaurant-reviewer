import {
  RESTAURANTS_LOADING_INITIATION,
  RESTAURANTS_LOADING_SUCCESS,
  RESTAURANTS_LOADING_FAILURE,
} from './constants';
const baseUrl = `http://0.0.0.0:8080/api/v1/`;
const restaurantUrl = `${baseUrl}restaurants`;
const headers = new Headers({
  'Content-Type': 'application/json',
});
const options = {
  method: 'GET',
  headers,
  mode: 'no-cors',
};

const loadRestaurantsInitiation = () => ({
  type: RESTAURANTS_LOADING_INITIATION,
});

const loadRestaurantsSuccess = (restaurants) => ({
  type: RESTAURANTS_LOADING_SUCCESS,
  restaurants,
});

const loadRestaurantsFailure = (error) => ({
  type: RESTAURANTS_LOADING_FAILURE,
  error,
});

// loadRestaurants :: None -> Dispatch Func -> Action Data : Error
export const loadRestaurants = () =>
  (dispatch) => {
    dispatch(loadRestaurantsInitiation());
    fetch(restaurantUrl, options)
      .then(res => res.json())
      .then(data => {
        dispatch(
          loadRestaurantsSuccess(data.restaurants)
        );
      })
      .catch(error => {
        dispatch(
          loadRestaurantsFailure(error)
        );
      });
  };
