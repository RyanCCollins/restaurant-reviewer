import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Import all of your reducers here:
import featured from './containers/LandingContainer/reducer';
import restaurants from './containers/RestaurantsGridContainer/reducer';
import singleRestaurant from './containers/singleRestaurantContainer/reducer';
import addReview from './containers/AddReviewContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  featured,
  restaurants,
  singleRestaurant,
  addReview,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
