import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/heading';
import Paragraph from 'grommet/components/paragraph';
import StarRatingComponent from 'react-star-rating-component';
import Box from 'grommet/components/box';

const RestaurantReview = ({
  review,
}) => (
  <Box className={styles.restaurantReview} a11yTitle="Restaurant Review" size="large">
    <Heading tag="h3">
      {review.person}
    </Heading>
    <Paragraph>
       on {review.date}
    </Paragraph>
    <StarRatingComponent
      name="Review Stars"
      className={styles.starRating}
      starColor={"#FF7D28"}
      value={review.total_stars}
      editing={false}
    />
    <Paragraph>
      {review.text}
    </Paragraph>
  </Box>
);

RestaurantReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default cssModules(RestaurantReview, styles);
