import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import StarRatingComponent from 'react-star-rating-component';
import {
  Carousel,
  Headline,
} from 'grommet';

const HeroCarousel = ({
  restaurants,
}) => (
  <div className={styles.heroCarousel}>
    <Headline className={styles.headline} align="center" size="large">
      Restaurant Reviewer
    </Headline>
    <Carousel>
      {restaurants.map((item, index) =>
        <div key={index} className={styles.carousel}>
          {/* <div className={styles.overlay}>
            <div className={styles.rowOne}>
              <Heading className={styles.heading}>
                {item.name}
              </Heading>
              <div className={styles.rightInfo}>
                <p className={styles.itemType}>{item.type}</p>
                <StarRatingComponent
                  name=""
                  starColor={"rgb(122, 131, 20)"}
                  value={item.rating}
                  editing={false}
                />
              </div>
            </div>
            <div className={styles.itemCaption}>
              <p>{item.caption}</p>
            </div>
          </div> */}
          <img
            src={item.src}
            alt={item.caption}
            className="img-responsive"
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
