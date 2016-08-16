/**
* @Date:   2016-08-16T19:56:12-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:56:15-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

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
