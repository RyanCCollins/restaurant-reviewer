import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Paragraph from 'grommet/components/paragraph';
import Image from 'grommet/components/image';
import Section from 'grommet/components/section';

const RestaurantPanel = ({
  restaurant,
}) => (
  <div className={styles.restaurantPanel}>
    <div className={styles.panel}>
      <Image
        caption
        className={styles.featureImage}
        src={restaurant.image}
        alt={`${restaurant.name} Logo`}
        full="horizontal"
      />
      <Section className={styles.textWrapper}>
        <Paragraph>
          {restaurant.type.name}
        </Paragraph>
        <Paragraph>
          {restaurant.address} {restaurant.city} {restaurant.zip} {restaurant.country}
        </Paragraph>
        <Paragraph>
          <a href={restaurant.website}>{restaurant.website}</a>
        </Paragraph>
        <Paragraph>
          {restaurant.phone}
        </Paragraph>
      </Section>
    </div>
  </div>
);

RestaurantPanel.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantPanel, styles);
