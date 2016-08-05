import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  SingleRestaurantContainer,
} from 'containers';


// Pages map directly to Routes, i.e. one page equals on Route

const SingleRestaurantPage = () => (
  <div className={styles.container}>
    <SingleRestaurantContainer />
  </div>
);

export default cssModules(SingleRestaurantPage, styles);
