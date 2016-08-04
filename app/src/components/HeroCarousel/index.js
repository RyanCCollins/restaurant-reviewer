import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import {
  Carousel,
} from 'grommet';

const HeroCarousel = ({
  images,
}) => (
  <div className={styles.heroCarousel}>
    <Carousel>
      {images.map((i, index) =>
        <div key={index} style={{ maxHeight: '50vh' }}>
          <img
            src={i.src}
            alt={i.caption}
            className="img-responsive"
          />
        </div>
      )}
    </Carousel>
  </div>
);

HeroCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default cssModules(HeroCarousel, styles);
