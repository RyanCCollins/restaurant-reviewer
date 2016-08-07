import {
  RESTAURANTS_LOADING_INITIATION,
  RESTAURANTS_LOADING_SUCCESS,
  RESTAURANTS_LOADING_FAILURE,
  RESTAURANT_CATEGORIES,
} from './constants';
import uniq from 'lodash/uniq';
const baseUrl = process.env.NODE_ENV === 'production' ?
  process.env.BASE_URL : 'http://0.0.0.0:8080/api/v1/';
const restaurantUrl = `${baseUrl}restaurants`;
import fetch from 'isomorphic-fetch';
const headers = new Headers({
  'content-type': 'application/json',
});
const options = {
  method: 'GET',
  headers,
  mode: 'no-cors',
};

// loadRestaurantsInitiation :: None -> {Action}
const loadRestaurantsInitiation = () => ({
  type: RESTAURANTS_LOADING_INITIATION,
});

// loadRestaurantsSuccess :: [JSON] -> {Action}
const loadRestaurantsSuccess = (restaurants) => ({
  type: RESTAURANTS_LOADING_SUCCESS,
  restaurants,
});

// loadRestaurantCategories :: [String] -> {Action}
const loadRestaurantCategories = (categories) => ({
  type: RESTAURANT_CATEGORIES,
  categories,
});

// loadRestaurantsFailure :: Error -> {Action}
const loadRestaurantsFailure = (error) => ({
  type: RESTAURANTS_LOADING_FAILURE,
  error,
});

// loadRestaurants :: None -> Dispatch Func -> Action Data : Error
export const loadRestaurants = () =>
  (dispatch) => {
    dispatch(loadRestaurantsInitiation());
    fetch(restaurantUrl)
      .then(res => res.json())
      .then(data => {
        const {
          restaurants,
        } = data;
        const categories = uniq(restaurants.map(i => i.type.name));
        dispatch(
          loadRestaurantCategories(categories)
        );
        return restaurants;
      })
      .then(restaurants => {
        dispatch(
          loadRestaurantsSuccess(restaurants)
        );
      })
      .catch(error => {
        dispatch(
          loadRestaurantsFailure(error)
        );
      });
  };
