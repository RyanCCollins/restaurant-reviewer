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
  <Box colorIndex="light-1" pad="medium">
    <Heading tag="h3">
      {review.person}
    </Heading>
    <Paragraph>
       {review.date}
    </Paragraph>
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
  </Box>
);

RestaurantReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default cssModules(RestaurantReview, styles);
