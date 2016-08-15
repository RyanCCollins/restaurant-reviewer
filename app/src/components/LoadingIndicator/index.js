import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import LoadingImageSrc from './200.gif';

const LoadingIndicator = ({
  isLoading,
  funMode,
}) => (
  <div className={styles.loadingIndicator}>
    {isLoading ?
      <span>
        {typeof funMode !== 'undefined' && funMode ?
          <img
            className={styles.ripple}
            src={LoadingImageSrc}
            alt="Loading"
          />
        :
          <div className="dizzy-gillespie" />
        }
        <h3>Loading...</h3>
      </span>
    :
      <noscript />
    }
  </div>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool,
  funMode: PropTypes.bool.isRequired,
};

export default cssModules(LoadingIndicator, styles);
