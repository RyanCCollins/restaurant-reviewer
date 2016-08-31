import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';

const FilterHeading = ({
  filters,
  isHidden,
}) => (
  <div className={styles.filterHeading}>
    {isHidden ?
      <noscript />
    :
    <div>
      <Heading tag="h2" align="center">
        Filtered By:
      </Heading>
      <span>
        {
          `Category: ${filters.categoryFilter},
          Location: ${filters.locationFilter},
          Rating: ${filters.ratingFilter}`
        }
      </span>
    </div>
    }
  </div>
);

FilterHeading.propTypes = {
  filters: PropTypes.object.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default cssModules(FilterHeading, styles);
