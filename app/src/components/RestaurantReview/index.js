import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const RestaurantReview = (props) => (
  <div className={styles.restaurantReview}>
  </div>
);

RestaurantReview.propTypes = {

};

export default cssModules(RestaurantReview, styles);
