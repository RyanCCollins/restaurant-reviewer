import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { RestaurantReview } from 'components';
import Headline from 'grommet/components/headline';
import Section from 'grommet/components/section';
import Tiles from 'grommet/components/tiles';
import Tile from 'grommet/components/tile';

const ReviewGrid = ({
  reviews,
}) => (
  <Section>
    <div className={styles.reviewGrid}>
      <Headline className={styles.headline} align="center">
        Reviews
      </Headline>
      <Tiles
        flush={false}
        justify="center"
        colorIndex="light-2"
        full="horizontal"
        a11yTitle="Restaurant Reviews"
      >
        {reviews.map((item, i) =>
          <Tile
            key={i}
            pad="large"
            responsive
            className={styles.tile}
            align="start"
            colorIndex="light-1"
          >
            <RestaurantReview key={i} review={item} />
          </Tile>
        )}
      </Tiles>
    </div>
  </Section>
);

ReviewGrid.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default cssModules(ReviewGrid, styles);
