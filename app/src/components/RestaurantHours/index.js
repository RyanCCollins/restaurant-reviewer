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
import Contract from 'grommet/components/icons/base/contract';
import Expand from 'grommet/components/icons/base/expand';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/section';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
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
  onExpandHours,
  isExpanded,
}) => (
  <Section>
    <Heading align="center" tag="h2">
      Hours of Operation
    </Heading>
    <Button
      icon={
        isExpanded ?
          <Contract a11yTitleId="hide-details-icon-1" a11yTitle="Hide Details" />
        :
          <Expand a11yTitleId="show-details-icon-1" a11yTitle="Show Details" />
      }
      label={isExpanded ? 'Hide Details' : 'Show Details'}
      plain
      onClick={onExpandHours}
    />
    <Animate
      enter={{ animation: 'slide-down', duration: 1000 }}
      leave={{ animation: 'slide-up', duration: 1000 }}
      visible={isExpanded}
    >
      <Box>
        <List selectable={false} className={styles.list}>
          {daysOfWeek.map((item, index) =>
            <RestaurantHoursListItem
              key={index}
              day={item.toUpperCase()}
              hours={restaurant.hours[`${item}`]}
            />
          )}
        </List>
      </Box>
    </Animate>
  </Section>
);

RestaurantHours.propTypes = {
  restaurant: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onExpandHours: PropTypes.func.isRequired,
};

export default cssModules(RestaurantHours, styles);
