import {
  RESTAURANTS_LOADING_INITIATION,
  RESTAURANTS_LOADING_SUCCESS,
  RESTAURANTS_LOADING_FAILURE,
  RESTAURANT_CATEGORIES,
  CLEAR_RESTAURANT_ERRORS,
  RESTAURANT_LOCATIONS,
  FILTER_RESTAURANTS_BY_CATEGORY,
  FILTER_RESTAURANTS_BY_RATING,
  FILTER_RESTAURANTS_BY_LOCATION,
  CLEAR_RESTAURANTS_FILTERS,
} from './constants';

const initialState = {
  items: [],
  filteredItems: [],
  errors: [],
  isLoading: false,
  selectedFilterIndex: 0,
  selectedRatingFilter: 'All',
  selectedLocationFilter: 'All',
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
        filteredItems: action.restaurants,
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
    case FILTER_RESTAURANTS_BY_CATEGORY:
      return Object.assign({}, state, {
        selectedFilterIndex: action.category,
        filteredItems: state.items.filter(item =>
          item.type.name === state.categories[action.category]
        ),
      });
    case FILTER_RESTAURANTS_BY_RATING:
      return Object.assign({}, state, {
        selectedRatingFilter: action.rating,
        filteredItems: state.items.filter(item =>
          item.average_rating === parseInt(action.rating, 10)
        ),
      });
    case FILTER_RESTAURANTS_BY_LOCATION:
      return Object.assign({}, state, {
        selectedLocationFilter: action.location,
        filteredItems: state.items.filter(item =>
          item.city === action.location
        ),
      });
    case CLEAR_RESTAURANTS_FILTERS:
      return Object.assign({}, state, {
        filteredItems: state.items,
      });
    default:
      return state;
  }
};

export default restaurants;
