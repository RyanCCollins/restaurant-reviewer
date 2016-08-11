import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
// No ES6 desructuring because of grommet's performance issues
import Paragraph from 'grommet/components/Paragraph';
import LocationPin from 'grommet/components/icons/base/LocationPin';
import LinkIcon from 'grommet/components/icons/base/Link';
import ContactUs from 'grommet/components/icons/base/ContactUs';
import Box from 'grommet/components/box';
import Java from 'grommet/components/icons/base/Java';

const RestaurantInfo = ({
  restaurant,
}) => (
  <div className={styles.cardInfo}>
    <Box>
      <div className={styles.type}>
        <span className={styles.span}>
          <Java />{'   '}{restaurant.type.name}
        </span>
      </div>
      <Paragraph>
        <ContactUs />{'   '}{restaurant.phone}
      </Paragraph>
      <Paragraph>
        <LocationPin />
        {'   '}
        {restaurant.city}, {restaurant.state} {restaurant.country}
      </Paragraph>
      <Paragraph>
        <LinkIcon />{'   '}
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
