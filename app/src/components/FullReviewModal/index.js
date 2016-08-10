import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Header from 'grommet/components/header';
import Paragraph from 'grommet/components/paragraph';
import StarRatingComponent from 'react-star-rating-component';
import Article from 'grommet/components/article';
import Layer from 'grommet/components/layer';
import Section from 'grommet/components/section';

const FullReviewModal = ({
  isOpen,
  onToggleClose,
  review,
}) => (
  <Layer
    hidden={!isOpen}
    onClose={onToggleClose}
    align="center"
    closer
    className={styles.fullReviewModal}
  >
    <Article>
      {review ?
        <Section>
          <Header className={styles.header}>
            <h2>{review.person}</h2>
          </Header>
          <Paragraph className={styles.dateWrapper}>
            <span className={styles.dateDivider}>
              <span className={styles.date}>{review.date}</span>
            </span>
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
        </Section>
      :
        <div className={styles.center}>
          <Header>
            <h2>No Review Found</h2>
          </Header>
        </div>
      }
    </Article>
  </Layer>
);

FullReviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggleClose: PropTypes.func.isRequired,
  review: PropTypes.object,
};

export default cssModules(FullReviewModal, styles);
