/**
* By Ryan Collins
* @Date:   2016-08-16T19:56:38-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:59:59-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { RestaurantGridItem, FilterHeading } from 'components';
import Section from 'grommet/components/Section';
import filterIsSet from 'utils/filter';

const RestaurantGrid = ({
  restaurants,
  onViewDetails,
  currentFilter,
  isFiltered,
}) => (
  <Section className={styles.restaurantGrid}>
    <FilterHeading
      filters={currentFilter}
      isFiltered={isFiltered}
      isHidden={!filterIsSet(currentFilter)}
    />
    <div className={styles.restaurantGrid}>
      {restaurants.map((restaurant, i) =>
        <RestaurantGridItem
          key={i}
          i={i}
          restaurant={restaurant}
          onViewDetails={onViewDetails} // eslint-disable-line
        />
      )}
    </div>
  </Section>
);

RestaurantGrid.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onViewDetails: PropTypes.func.isRequired,
  currentFilter: PropTypes.object,
  isFiltered: PropTypes.bool.isRequired,
};

export default cssModules(RestaurantGrid, styles);
