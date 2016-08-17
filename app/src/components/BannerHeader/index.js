/**
* By Ryan Collins
* @Date:   2016-08-16T19:54:40-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:35-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/heading';

const BannerHeader = ({
  heading,
}) => (
  <header className={styles.bannerHeader}>
    <div className={styles.banner}>
      <Heading tag="h1" strong align="center">
        {heading}
      </Heading>
    </div>
  </header>
);

BannerHeader.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default cssModules(BannerHeader, styles);
