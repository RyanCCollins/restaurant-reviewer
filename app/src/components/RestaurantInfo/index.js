import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Paragraph from 'grommet/components/Paragraph';
import LocationPin from 'grommet/components/icons/base/LocationPin';
import Link from 'grommet/components/icons/base/Link';
import ContactUs from 'grommet/components/icons/base/ContactUs';
import Box from 'grommet/components/box';
import Java from 'grommet/components/icons/base/Java';

const RestaurantInfo = ({
  restaurant,
}) => (
  <div className={styles.cardInfo}>
    <Box>
      <Paragraph>
        <p className={styles.type}>
          <Java />
          {'  '}
          {restaurant.type.name}
        </p>
      </Paragraph>
      <Paragraph>
        <LocationPin />
        {'   '}
        {restaurant.city}, {restaurant.state} {restaurant.country}
      </Paragraph>
      <Paragraph>
        <ContactUs />{'   '}{restaurant.phone}
      </Paragraph>
      <Paragraph>
        <Link />{'   '}
        <a href={restaurant.website}>
          {restaurant.website.length > 30 ? 'Visit Website' : restaurant.website}
        </a>
      </Paragraph>
    </Box>
  </div>
);

RestaurantInfo.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantInfo, styles);
