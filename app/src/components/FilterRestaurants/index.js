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
    <Menu direction="row" size="large">
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
  </Section>
);

FilterRestaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default cssModules(FilterRestaurants, styles);
