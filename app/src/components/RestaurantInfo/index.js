/**
* By Ryan Collins
* @Date:   2016-08-16T19:57:18-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:59:45-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
// No ES6 desructuring because of grommet's performance issues
import Paragraph from 'grommet/components/Paragraph';
import LocationPin from 'grommet/components/icons/base/LocationPin';
import LinkIcon from 'grommet/components/icons/base/Link';
import ContactUs from 'grommet/components/icons/base/ContactUs';
import Box from 'grommet/components/box';
import Anchor from 'grommet/components/Anchor';
import Java from 'grommet/components/icons/base/Java';

const RestaurantInfo = ({
  restaurant,
  i,
}) => (
  <div className={styles.cardInfo}>
    <Box>
      <Paragraph className={styles.paragraph}>
        <Java
          a11yTitle="Restaurant Icon"
          a11yTitleId={`restaurant-icon-${i}`}
        />
        <span className={styles.type}>
          {restaurant.type.name}
        </span>
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <ContactUs
          a11yTitle="Contact Us Icon"
          a11yTitleId={`contact-us-icon-${i}`}
        />
        {'   '}
        <span>{restaurant.phone}</span>
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <LocationPin
          a11yTitle="Location Pin Icon"
          a11yTitleId={`location-pin-icon-${i}`}
        />
        <span>
          {restaurant.city}, {restaurant.state} {restaurant.country}
        </span>
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <LinkIcon a11yTitle="Link Icon" a11yTitleId={`link-icon-${i}`} />
        <Anchor href={restaurant.website}>
          {restaurant.website.length > 30 ? 'Visit Website' : restaurant.website}
        </Anchor>
      </Paragraph>
    </Box>
  </div>
);

RestaurantInfo.propTypes = {
  restaurant: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
};

export default cssModules(RestaurantInfo, styles);
