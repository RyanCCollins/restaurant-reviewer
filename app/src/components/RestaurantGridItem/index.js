import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import StarRatingComponent from 'react-star-rating-component';
import Heading from 'grommet/components/Heading';
import { Link } from 'react-router';
import { RestaurantInfo } from 'components';
import Button from 'grommet/components/button';
import Footer from 'grommet/components/footer';
import QuickView from 'grommet/components/icons/base/QuickView';

const RestaurantGridItem = ({
  restaurant,
}) => (
  <div className={styles.panel}>
    <div className={styles.imageWrapper}>
      <Link className={styles.link} to={`/restaurants/${restaurant.id}`}>
        <div className={styles.contents}>
          <Heading uppercase tag="h3" className={styles.title}>{restaurant.name}</Heading>
          <StarRatingComponent
            name=""
            starColor={"#FF7D28"}
            value={restaurant.average_rating}
            editing={false}
          />
        </div>
        <img className={styles.cardImage} src={restaurant.image} alt="Restaurant" />
      </Link>
    </div>
    <RestaurantInfo restaurant={restaurant} />
    <Footer className={styles.footer}>
      <Link to={`/restaurants/${restaurant.id}`}>
        <Button
          plain
          fill={false}                              /* eslint-disable */
          onClick={() => console.log('👻 BOO!!!')} /* eslint-enable */
          icon={
            <QuickView size="large" colorIndex="brand" />
          }
        />
      </Link>
    </Footer>
  </div>
);

RestaurantGridItem.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantGridItem, styles);
