/**
* @Date:   2016-08-16T19:56:38-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:56:42-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { RestaurantGridItem } from 'components';

const RestaurantGrid = ({
  restaurants,
  onViewDetails,
}) => (
  <section className={styles.restaurantGrid}>
    {restaurants.map((rest, i) =>
      <RestaurantGridItem
        key={i}
        restaurant={rest}
        /* eslint-disable */
        onViewDetails={onViewDetails} /* eslint-enable */
      />
    )}
  </section>
);

RestaurantGrid.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default cssModules(RestaurantGrid, styles);
