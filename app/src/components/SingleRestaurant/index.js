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
import Article from 'grommet/components/article';
import Section from 'grommet/components/Section';

const SingleRestaurant = ({
  restaurant,
}) => (
  <main className={styles.singleRestaurant}>
    <BannerHeader heading={restaurant.name} />
    <Section primary a11yTitle="Restaurant Info Panel">
      <Article pad="medium">
        <RestaurantPanel restaurant={restaurant} />
      </Article>
    </Section>
  </main>
);

SingleRestaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(SingleRestaurant, styles);
