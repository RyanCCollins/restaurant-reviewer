import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Paragraph from 'grommet/components/Paragraph';
import LocationPin from 'grommet/components/icons/base/LocationPin';
import Link from 'grommet/components/icons/base/Link';
import ContactUs from 'grommet/components/icons/base/ContactUs';

const RestaurantInfo = ({
  restaurant,
}) => (
  <div className={styles.cardInfo}>
    <Paragraph>
      <LocationPin /> {restaurant.city}, {restaurant.state} {restaurant.country}
    </Paragraph>
    <Paragraph>
      <ContactUs /> {restaurant.phone}
    </Paragraph>
    <Paragraph>
      <Link /> <a href={restaurant.website}>{restaurant.website}</a>
    </Paragraph>
    <Paragraph>
      {restaurant.type.name}
    </Paragraph>
  </div>
);

RestaurantInfo.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantInfo, styles);
