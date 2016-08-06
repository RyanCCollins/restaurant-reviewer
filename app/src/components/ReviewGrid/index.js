import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { RestaurantReview } from 'components';
import Heading from 'grommet/components/heading';
import Section from 'grommet/components/section';
import Tiles from 'grommet/components/tiles';
import Tile from 'grommet/components/tile';

const ReviewGrid = ({
  reviews,
}) => (
  <Section>
    <div className={styles.reviewGrid}>
      <Tiles
        flush={false}
        justify="center"
        colorIndex="light-2"
        full="horizontal"
        a11yTitle="Restaurant Reviews"
      >
        <Heading align="center" tag="h2">
          Reviews
        </Heading>
        {reviews.map((item, i) =>
          <Tile pad="large" responsive align="start" colorIndex="light-1" size="large">
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
