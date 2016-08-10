import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import {
  Carousel,
  Heading,
  Headline,
} from 'grommet';

const HeroCarousel = ({
  restaurants,
}) => (
  <div className={styles.heroCarousel}>
    <div className={styles.overlay}>
      <Headline className={styles.headline} align="center" size="large">
        Restaurant Reviewer
      </Headline>
      <Headline className={styles.headline} align="center" size="small">
        Accessibility App
      </Headline>
      <Heading className={styles.subHeadline} align="center" tag="h6">
        by <a className={styles.link} href="http://www.ryancollins.io">Ryan Collins</a>
      </Heading>
    </div>
    <Carousel>
      {restaurants.map((item, index) =>
        <div key={index} className={styles.carousel}>
          <img
            src={item.src}
            alt={item.caption}
            className={styles.image}
          />
        </div>
      )}
    </Carousel>
  </div>
);

HeroCarousel.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default cssModules(HeroCarousel, styles);
