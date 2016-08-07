import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { RestaurantGridItem } from 'components';

const RestaurantGrid = ({
  restaurants,
}) => (
  <div className={styles.restaurantGrid}>
    {restaurants.map((rest, i) =>
      <RestaurantGridItem key={i} restaurant={rest} />
    )}
  </div>
);

RestaurantGrid.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default cssModules(RestaurantGrid, styles);
