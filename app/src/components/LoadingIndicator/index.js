import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import LoadingImageSrc from './ripple.gif';

const LoadingIndicator = ({
  isLoading,
}) => (
  <div className={styles.loadingIndicator}>
    {isLoading ?
      <span>
        <img
          className={styles.ripple}
          src={LoadingImageSrc}
          alt="loading"
        />
        <h3>Loading...</h3>
      </span>
    :
      <noscript />
    }
  </div>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool,
};

export default cssModules(LoadingIndicator, styles);
