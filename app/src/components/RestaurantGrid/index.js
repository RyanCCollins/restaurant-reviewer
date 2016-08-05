import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const RestaurantGrid = (props) => (
  <div className={styles.restaurantGrid}>
  </div>
);

RestaurantGrid.propTypes = {

};

export default cssModules(RestaurantGrid, styles);
