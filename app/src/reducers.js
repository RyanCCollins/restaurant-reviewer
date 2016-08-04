import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Import all of your reducers here:

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
