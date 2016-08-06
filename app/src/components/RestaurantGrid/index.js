import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import StarRatingComponent from 'react-star-rating-component';

const RestaurantGrid = ({
  restaurants,
}) => (
  <div className={styles.restaurantGrid}>
    {restaurants.map(rest =>
      <div className={styles.panel}>
        <div className={styles.imageWrapper}>
          <div className={styles.contents}>
            <h3 className={styles.title}>{rest.name}</h3>
            <StarRatingComponent
              name=""
              starColor={"#FF7D28"}
              value={rest.average_rating}
              editing={false}
            />
          </div>
          <Link to={`/restaurants/${rest.id}`}>
            <img className={styles.cardImage} src={rest.image} alt="Restaurant" />
          </Link>
        </div>
        <div className={styles.cardInfo}>
          <p>{rest.address}, {rest.city}, {rest.state} {rest.zip} {rest.country}</p>
          <p>Ph: {rest.phone} Web: {rest.website}</p>
          <p>{rest.type.name}</p>
        </div>
      </div>
    )}
  </div>
);

RestaurantGrid.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default cssModules(RestaurantGrid, styles);
