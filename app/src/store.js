import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

export const initialState = {
  featured: {
    isLoading: false,
    errors: [],
    restaurants: [],
  },
  restaurants: {
    isLoading: false,
    items: [],
    filteredItems: [],
    restaurants: [],
    categoryFilter: 'All',
    ratingFilter: 'All',
    locationFilter: 'All',
    appliedFilter: {
      isApplied: false,
    },
    errors: [],
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
  },
  singleRestaurant: {
    reviews: [],
    errors: [],
    isLoading: false,
    selectedRestaurant: null,
    selectedReviewId: null,
    hoursAreExpanded: false,
  },
  addReview: {
    isAddingReview: false,
    error: undefined,
  },
};

/* Commonly used middlewares and enhancers */
/* See: http://redux.js.org/docs/advanced/Middleware.html*/
const loggerMiddleware = createLogger();
const middlewares = [thunk, promiseMiddleware(), loggerMiddleware];

/* Everyone should use redux dev tools */
/* https://github.com/gaearon/redux-devtools */
/* https://medium.com/@meagle/understanding-87566abcfb7a */
const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

/* Hopefully by now you understand what a store is and how redux uses them,
 * But if not, take a look at: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
 * And https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch
 */
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

/* See: https://github.com/reactjs/react-router-redux/issues/305 */
export const history = syncHistoryWithStore(browserHistory, store);

/* Hot reloading of reducers.  How futuristic!! */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    /*eslint-disable */ // Allow require
    const nextRootReducer = require('./reducers').default;
    /*eslint-enable */
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
