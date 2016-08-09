import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import StarRatingComponent from 'react-star-rating-component';
import Heading from 'grommet/components/Heading';
import { Link } from 'react-router';
import { RestaurantInfo } from 'components';
import Button from 'grommet/components/button';
import Footer from 'grommet/components/footer';
import Information from 'grommet/components/icons/base/information';

const RestaurantGridItem = ({
  restaurant,
  onViewDetails,
}) => (
  <div className={styles.panel}>
    <div className={styles.imageWrapper}>
      <div className={styles.contents}>
        <Heading uppercase tag="h3" className={styles.title}>{restaurant.name}</Heading>
        <StarRatingComponent
          name="Restaurant Star Rating"
          role="presentation"
          starColor={"#FF7D28"}
          value={restaurant.average_rating}
          editing={false}
        />
        <Link className={styles.link} to={`/restaurants/${restaurant.id}`}>
          <img
            className={styles.cardImage}
            src={restaurant.image}
            alt={`A restaurant named ${restaurant.name}`}
          />
          <span className={styles.srOnly}>
            {`Average rating of ${restaurant.average_rating} out of 5 stars`}
          </span>
        </Link>
      </div>
    </div>
    <RestaurantInfo restaurant={restaurant} />
    <Footer className={styles.footer}>
      <Button
        plain
        fill={false} /*eslint-disable*/
        onClick={() => onViewDetails(restaurant.id)} /* eslint-enable */
        icon={
          <Information
            size="medium"
            colorIndex="brand"
            a11yTitle="View details of restaurant"
          />
        }
      />
    </Footer>
  </div>
);

RestaurantGridItem.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default cssModules(RestaurantGridItem, styles);
