/**
* By Ryan Collins
* @Date:   2016-08-16T19:56:57-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:59:54-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';
import Article from 'grommet/components/article';
import { Link } from 'react-router';
import {
  RestaurantInfo,
  SrOnlyContent,
  StarRating,
} from 'components';
import Button from 'grommet/components/button';
import Footer from 'grommet/components/footer';
import Information from 'grommet/components/icons/base/information';

const RestaurantGridItem = ({
  restaurant,
  onViewDetails,
  i,
}) => (
  <Article className={styles.panel}>
    <div className={styles.imageWrapper}>
      <div className={styles.contents}>
        <Heading
          uppercase
          tag="h3"
          className={styles.title}
        >
          {restaurant.name}
        </Heading>
        <StarRating
          value={restaurant.average_rating}
          editable={false}
          label="Average Rating"
        />
        <Link className={styles.link} to={`/restaurants/${restaurant.id}`}>
          <img
            className={styles.cardImage}
            src={restaurant.image}
            alt={`A restaurant named ${restaurant.name}`}
          />
        </Link>
      </div>
    </div>
    <RestaurantInfo restaurant={restaurant} i={i} />
    <Footer className={styles.footer}>
      <Button
        plain
        fill={false}
        label="More Info"
        onClick={() => onViewDetails(restaurant.id)} // eslint-disable-line react/jsx-no-bind
        icon={
          <Information
            size="medium"
            colorIndex="brand"
            a11yTitle="View Restaurant Details"
            a11yTitleId={`view-details-${i}`}
          />
        }
      />
    </Footer>
  </Article>
);

RestaurantGridItem.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onViewDetails: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
};

export default cssModules(RestaurantGridItem, styles);
