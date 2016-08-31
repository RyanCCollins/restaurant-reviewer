import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';

const pluralize = (x, ratingFilter) =>
  parseInt(ratingFilter, 10) === 1 ? x : `${x}s`;

const FilterHeading = ({
  filters,
  isHidden,
  isFiltered,
}) => (
  <div className={isHidden ? styles.noStyle : styles.filterHeading}>
    <Heading tag="h2" align="center">
      {isFiltered ? 'Filtered By' : 'Selected Filters'}
    </Heading>
    <Heading className={styles.filterSubHeading} tag="h5" align="center">
      Category: <em>{filters.categoryFilter}</em>{', '}
      Location: <em>{filters.locationFilter}</em>{', '}
      Rating: <em>{`${filters.ratingFilter}
        ${filters.ratingFilter === 'All' ? '' : pluralize('Star', filters.ratingFilter)}
      `}
      </em>
    </Heading>
  </div>
);

FilterHeading.propTypes = {
  filters: PropTypes.object.isRequired,
  isHidden: PropTypes.bool.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};

export default cssModules(FilterHeading, styles);
