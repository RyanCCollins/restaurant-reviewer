import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import List from 'grommet/components/list';
import ListItem from 'grommet/components/ListItem';
import Section from 'grommet/components/section';
import Accordian from 'grommet/components/accordian';
import AccordianPanel from 'grommet/components/accordianpanel';

const RestaurantHours = ({
  restaurant,
}) => (
  <Section className={styles.restaurantHours}>
    <Accordian animate initialIndex={0}>
      <AccordianPanel heading="Restaurant Hours">
        <List>
          <ListItem justify="center">
            {`Monday:  ${restaurant.hours.monday}`}
          </ListItem>
          <ListItem justify="center">
            {`Tuesday:  ${restaurant.hours.tuesday}`}
          </ListItem>
          <ListItem justify="center">
            {`Wednesday:  ${restaurant.hours.wednesday}`}
          </ListItem>
          <ListItem justify="center">
            {`Thursday:  ${restaurant.hours.thursday}`}
          </ListItem>
          <ListItem justify="center">
            {`Friday:  ${restaurant.hours.friday}`}
          </ListItem>
          <ListItem justify="center">
            {`Saturday:  ${restaurant.hours.saturday}`}
          </ListItem>
          <ListItem justify="center">
            {`Sunday:  ${restaurant.hours.sunday}`}
          </ListItem>
        </List>
      </AccordianPanel>
    </Accordian>
  </Section>
);

RestaurantHours.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantHours, styles);
