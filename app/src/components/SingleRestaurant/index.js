import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import {
  RestaurantPanel,
  BannerHeader,
} from 'components';
import Article from 'grommet/components/article';

const SingleRestaurant = ({
  restaurant,
}) => (
  <div className={styles.singleRestaurant}>
    <BannerHeader heading={restaurant.name} />
    <Article pad="medium">
      <RestaurantPanel restaurant={restaurant} />
    </Article>
  </div>
);

SingleRestaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(SingleRestaurant, styles);
