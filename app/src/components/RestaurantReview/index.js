import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/heading';
import Paragraph from 'grommet/components/paragraph';
import StarRatingComponent from 'react-star-rating-component';
import Box from 'grommet/components/box';
import Quote from 'grommet/components/quote';

const RestaurantReview = ({
  review,
}) => (
  <Box colorIndex="light-1" pad="medium" className={styles.box}>
    <Heading tag="h2" className={styles.name}>
      Review #{review.id}
    </Heading>
    <Quote borderColorIndex="accent-1" size="small" credit={review.person}>
      <Paragraph className={styles.dateWrapper}>
        <div className={styles.dateDivider}>
          <span className={styles.date}>{review.date}</span>
        </div>
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
        <p className={styles.quote}>{review.text}</p>
      </Paragraph>
    </Quote>
  </Box>
);

RestaurantReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default cssModules(RestaurantReview, styles);
