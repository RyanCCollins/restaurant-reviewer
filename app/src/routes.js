import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Pages.LandingPage} />
        <Route path="/signin" component={Pages.SigninPage} />
        <Route path="/signup" component={Pages.SignupPage} />
        <Route path="/restaurants/:id" component={Pages.SingleRestaurantPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
