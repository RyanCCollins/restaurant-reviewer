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
}) => (
  <div className={styles.cardInfo}>
    <Box>
      <Paragraph className={styles.paragraph}>
        <Java />
        <span className={styles.type}>
          {restaurant.type.name}
        </span>
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <ContactUs />{'   '}{restaurant.phone}
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <LocationPin />
        {restaurant.city}, {restaurant.state} {restaurant.country}
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <LinkIcon />
        <Anchor href={restaurant.website}>
          {restaurant.website.length > 30 ? 'Visit Website' : restaurant.website}
        </Anchor>
      </Paragraph>
    </Box>
  </div>
);

RestaurantInfo.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantInfo, styles);
