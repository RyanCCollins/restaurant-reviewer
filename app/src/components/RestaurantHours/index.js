import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import List from 'grommet/components/list';
import ListItem from 'grommet/components/ListItem';
import Heading from 'grommet/components/heading';
import Section from 'grommet/components/section';

const RestaurantHours = ({
  restaurant,
}) => (
  <Section className={styles.restaurantHours}>
    <Heading tag="h4">
      Hours of Operation
    </Heading>
    <List>
      <ListItem justify="around">
        {`Monday:  ${restaurant.hours.monday}`}
      </ListItem>
      <ListItem justify="around">
        {`Tuesday:  ${restaurant.hours.tuesday}`}
      </ListItem>
      <ListItem justify="around">
        {`Wednesday:  ${restaurant.hours.wednesday}`}
      </ListItem>
      <ListItem justify="around">
        {`Thursday:  ${restaurant.hours.thursday}`}
      </ListItem>
      <ListItem justify="around">
        {`Friday:  ${restaurant.hours.friday}`}
      </ListItem>
      <ListItem justify="around">
        {`Saturday:  ${restaurant.hours.saturday}`}
      </ListItem>
      <ListItem justify="around">
        {`Sunday:  ${restaurant.hours.sunday}`}
      </ListItem>
    </List>
  </Section>
);

RestaurantHours.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantHours, styles);
