import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { RestaurantGridItem } from 'components';

const RestaurantGrid = ({
  restaurants,
  onClickViewDetails,
}) => (
  <section className={styles.restaurantGrid}>
    {restaurants.map((rest, i) =>
      <RestaurantGridItem
        key={i}
        restaurant={rest}
        /* eslint-disable */
        onClickViewDetail={onClickViewDetails.bind(rest.id)} /* eslint-enable */
      />
    )}
  </section>
);

RestaurantGrid.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onClickViewDetails: PropTypes.func.isRequired,
};

export default cssModules(RestaurantGrid, styles);
