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
import ListItem from 'grommet/components/ListItem';
import { SrOnlyContent } from 'components';

const RestaurantHoursListItem = ({
  day,
  hours,
}) => (
  <ListItem justify="between">
    <span>{day}</span>
    <span>{hours}</span>
    <SrOnlyContent>
      {
        `${day}.
        From ${hours.split(' - ')[0]}
        to ${hours.split(' - ')[1]}`
      }
    </SrOnlyContent>
  </ListItem>
);

RestaurantHoursListItem.propTypes = {
  day: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
};

export default RestaurantHoursListItem;
