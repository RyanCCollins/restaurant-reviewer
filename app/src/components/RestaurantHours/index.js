/**
* By Ryan Collins
* @Date:   2016-08-16T19:57:06-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:59:49-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import List from 'grommet/components/list';
import Section from 'grommet/components/section';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import { RestaurantHoursListItem } from 'components';

const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const RestaurantHours = ({
  restaurant,
}) => (
  <Section>
    <Accordion a11yTitle="Restaurant Hours">
      <AccordionPanel heading="Restaurant Hours">
        <List className={styles.list}>
          {daysOfWeek.map((item, index) =>
            <RestaurantHoursListItem
              key={index}
              day={item.toUpperCase()}
              hours={restaurant.hours[`${item}`]}
            />
          )}
        </List>
      </AccordionPanel>
    </Accordion>
  </Section>
);

RestaurantHours.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantHours, styles);
