import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const ReviewSronly = ({
  review,
}) => (
  <a href="#" className={styles.srOnly}>
    <span>
      {`Review by ${review.person} on ${review.date}.
        ${review.total_stars} out of 5 stars. ${review.text}`}
    </span>
  </a>
);

ReviewSronly.propTypes = {
  review: PropTypes.object.isRequired,
};

export default cssModules(ReviewSronly, styles);
