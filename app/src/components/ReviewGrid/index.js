/**
* @Date:   2016-08-16T19:58:13-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:58:17-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { RestaurantReview } from 'components';
import Heading from 'grommet/components/heading';
import Section from 'grommet/components/section';
import Tiles from 'grommet/components/tiles';

const ReviewGrid = ({
  reviews,
  onClickReview,
}) => (
  <Section>
    <div className={styles.reviewGrid}>
      <Heading className={styles.headline} margin="large" tag="h1" align="center">
        Reviews
      </Heading>
      <Tiles
        flush={false}
        justify="center"
        colorIndex="light-2"
        full="horizontal"
        responsive={false}
        a11yTitle="Restaurant Reviews"
      >
        {reviews.map((item, i) =>
          <div key={i} className={styles.responsive}>
            <RestaurantReview
              onReviewClick={onClickReview}
              review={item}
            />
          </div>
        )}
      </Tiles>
    </div>
  </Section>
);

ReviewGrid.propTypes = {
  reviews: PropTypes.array.isRequired,
  onClickReview: PropTypes.func.isRequired,
};

export default cssModules(ReviewGrid, styles);
