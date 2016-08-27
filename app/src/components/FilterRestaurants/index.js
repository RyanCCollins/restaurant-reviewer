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
import Button from 'grommet/components/button';
import Close from 'grommet/components/icons/base/Close';
import Footer from 'grommet/components/Footer';

const FilterRestaurants = ({
  locations,
  ratings,
  onFilterLocations,
  onFilterRatings,
  isFiltering,
  onClearFilter,
  categories,
  onFilterCategories,
  onApplyFilters,
}) => (
  <Section
    className={styles.filterRestaurants}
  >
    <div className={styles.menuWrapper}>
      <Menu
        direction="row"
        size="small"
        responsive
        closeOnClick={false}
      >
        <FilterMenu
          menuItems={categories.map((item, id) => ({ id, value: item }))}
          onSelectItem={onFilterCategories}
          label="Filter by Category"
        />
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
      <Footer className={styles.footerContainer}>
        {isFiltering ?
          <Button
            classname={styles.clearButton}
            icon={<Close />}
            label="Clear"
            plain
            onClick={onClearFilter}
          />
        :
          <Button
            label="Apply Filter(s)"
            primary
            onClick={onApplyFilters}
          />
        }
      </Footer>
    </div>
  </Section>
);

FilterRestaurants.propTypes = {
  locations: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
  onFilterLocations: PropTypes.func.isRequired,
  onFilterRatings: PropTypes.func.isRequired,
  isFiltering: PropTypes.bool.isRequired,
  onClearFilter: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  onFilterCategories: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};

export default cssModules(FilterRestaurants, styles);
