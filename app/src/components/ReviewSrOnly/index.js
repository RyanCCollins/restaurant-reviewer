import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const ReviewSronly = ({
  review,
}) => (
  <span className={styles.srOnly}>
    {`Review by ${review.person}. ${review.total_stars} out of 5 stars. ${review.text}`}
  </span>
);

ReviewSronly.propTypes = {
  review: PropTypes.object.isRequired,
};

export default cssModules(ReviewSronly, styles);
