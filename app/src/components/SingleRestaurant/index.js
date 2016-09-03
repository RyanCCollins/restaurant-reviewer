/**
* By Ryan Collins
* @Date:   2016-08-16T19:58:40-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:59:10-04:00
* @License: All rights reserved.

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import {
  RestaurantPanel,
  BannerHeader,
} from 'components';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

const SingleRestaurant = ({
  restaurant,
  onExpandHours,
  hoursAreExpanded,
}) => (
  <div className={styles.singleRestaurant}>
    <BannerHeader heading={restaurant.name}>
      <Heading align="center" tag="h3">
        {`Average ${restaurant.average_rating} out of 5 Stars`}
      </Heading>
    </BannerHeader>
    <Section primary a11yTitle="Restaurant Info Panel">
      <RestaurantPanel
        onExpandHours={onExpandHours}
        hoursAreExpanded={hoursAreExpanded}
        restaurant={restaurant}
      />
    </Section>
  </div>
);

SingleRestaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
  hoursAreExpanded: PropTypes.bool.isRequired,
  onExpandHours: PropTypes.func.isRequired,
};

export default cssModules(SingleRestaurant, styles);
