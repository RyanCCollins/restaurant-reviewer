/**
* By Ryan Collins
* @Date:   2016-08-16T19:57:28-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:59:39-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Image from 'grommet/components/image';
import Section from 'grommet/components/section';
import { RestaurantInfo, RestaurantHours } from 'components';
import Heading from 'grommet/components/heading';

const RestaurantPanel = ({
  restaurant,
}) => (
  <div className={styles.restaurantPanel}>
    <div className={styles.panel}>
      <Image
        className={styles.featureImage}
        src={restaurant.image}
        alt={`${restaurant.name} Logo`}
        full="horizontal"
      />
      <Section className={styles.textWrapper}>
        <Heading align="center" tag="h3" />
        <RestaurantInfo restaurant={restaurant} />
        <RestaurantHours restaurant={restaurant} />
      </Section>
    </div>
  </div>
);

RestaurantPanel.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantPanel, styles);
