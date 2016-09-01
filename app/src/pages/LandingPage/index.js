import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// Example to import a component using ES6 destructuring.
/* eslint-disable*/ // Containers is an alias, so no file is found
import {
  LandingContainer,
  RestaurantsGridContainer,
} from 'containers';
import { updatePageTitle } from 'utils/a11y';

/* eslint-enable */

// Pages map directly to Routes, i.e. one page equals on Route
// Handler that maps to a route in /utils/routes
class LandingPage extends Component {
  componentDidMount() {
    updatePageTitle('Home Page');
  }
  render() {
    return (
      <div className={styles.container}>
        <LandingContainer />
        <RestaurantsGridContainer />
      </div>
    );
  }
}

export default cssModules(LandingPage, styles);
