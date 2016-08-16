/**
* @Date:   2016-08-16T19:57:36-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:58:05-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/heading';
import Paragraph from 'grommet/components/paragraph';
import StarRatingComponent from 'react-star-rating-component';
import Box from 'grommet/components/box';
import Article from 'grommet/components/article';

const RestaurantReview = ({
  review,
  onReviewClick,
}) => (
  <Box
    colorIndex="light-1"
    pad="medium"
    className={styles.box}
    onClick={() => onReviewClick(review.id)} // eslint-disable-line react/jsx-no-bind
  >
    <Heading align="center" tag="h2" className={styles.header}>
      {review.person}
    </Heading>
    <Article className={styles.content}>
      <div className={styles.starRating}>
        <StarRatingComponent
          name="Review Stars"
          starColor={"#FF7D28"}
          value={review.total_stars}
          editing={false}
        />
      </div>
      <Paragraph className={styles.reviewParagraph}>
        {review.text}
      </Paragraph>
    </Article>
    <p className={styles.date}>{review.date}</p>
  </Box>
);

RestaurantReview.propTypes = {
  review: PropTypes.object.isRequired,
  onReviewClick: PropTypes.func.isRequired,
};

export default cssModules(RestaurantReview, styles);
