import {
  RESTAURANTS_LOADING_INITIATION,
  RESTAURANTS_LOADING_SUCCESS,
  RESTAURANTS_LOADING_FAILURE,
  RESTAURANT_CATEGORIES,
  CLEAR_RESTAURANT_ERRORS,
  RESTAURANT_LOCATIONS,
} from './constants';

const initialState = {
  items: [],
  errors: [],
  isLoading: false,
  selectedFilterIndex: 0,
  categories: [],
  locations: [],
  ratings: [
    {
      id: 0,
      value: 'All',
    },
    {
      id: 1,
      value: '1 Star',
    },
    {
      id: 2,
      value: '2 Star',
    },
    {
      id: 3,
      value: '3 Star',
    },
    {
      id: 4,
      value: '4 Star',
    },
    {
      id: 5,
      value: '5 Star',
    },
  ],
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANTS_LOADING_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case RESTAURANTS_LOADING_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.restaurants,
      });
    case RESTAURANT_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.categories,
      });
    case RESTAURANT_LOCATIONS:
      return Object.assign({}, state, {
        locations: action.locations.map((i, index) => ({
          id: index,
          value: i,
        })),
      });
    case RESTAURANTS_LOADING_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errors: [...state.errors, action.error],
      });
    case CLEAR_RESTAURANT_ERRORS:
      return Object.assign({}, state, {
        errors: [],
      });
    default:
      return state;
  }
};

export default restaurants;
