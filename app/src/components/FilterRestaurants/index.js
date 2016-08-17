/**
* By Ryan Collins
* @Date:   2016-08-16T19:55:07-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:23-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { FilterMenu } from 'components';
import Section from 'grommet/components/Section';
import Menu from 'grommet/components/Menu';

const FilterRestaurants = ({
  locations,
  ratings,
  onFilterLocations,
  onFilterRatings,
}) => (
  <Section
    className={styles.filterRestaurants}
  >
    <div className={styles.menuWrapper}>
      <Menu
        direction="row"
        size="large"
        responsive
        closeOnClick={false}
      >
        <FilterMenu
          menuItems={locations}
          onSelectItem={onFilterLocations}
          label="Filter by Location"
        />
        <FilterMenu
          menuItems={ratings}
          onSelectItem={onFilterRatings}
          label="Filter by Rating"
        />
      </Menu>
    </div>
  </Section>
);

FilterRestaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default cssModules(FilterRestaurants, styles);
