/**
* By Ryan Collins
* @Date:   2016-08-16T19:56:12-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:08-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const LoadingIndicator = ({
  isLoading,
}) => (
  <div className={styles.loadingIndicator}>
    {isLoading &&
      <span role="status">
        <div className="dizzy-gillespie" />
        <h3>Loading...</h3>
      </span>
    }
  </div>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool,
};

export default cssModules(LoadingIndicator, styles);
