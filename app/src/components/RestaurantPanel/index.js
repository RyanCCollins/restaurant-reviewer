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
import Article from 'grommet/components/Article';

const RestaurantPanel = ({
  restaurant,
  hoursAreExpanded,
  onExpandHours,
}) => (
  <Article className={styles.restaurantPanel}>
    <div className={styles.panel}>
      <Image
        className={styles.featureImage}
        src={restaurant.image}
        alt={`${restaurant.name} Logo`}
        full="horizontal"
      />
      <Section className={styles.textWrapper}>
        <Heading tag="h2" aling="center">
          {`About ${restaurant.name}`}
        </Heading>
        <RestaurantInfo restaurant={restaurant} i={1} />
        <RestaurantHours
          restaurant={restaurant}
          isExpanded={hoursAreExpanded}
          onExpandHours={onExpandHours}
        />
      </Section>
    </div>
  </Article>
);

RestaurantPanel.propTypes = {
  restaurant: PropTypes.object.isRequired,
  hoursAreExpanded: PropTypes.bool.isRequired,
  onExpandHours: PropTypes.func.isRequired,
};

export default cssModules(RestaurantPanel, styles);
