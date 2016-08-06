import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/heading';

const BannerHeader = ({
  heading,
}) => (
  <header className={styles.bannerHeader}>
    <div className={styles.banner}>
      <Heading tag="h3" align="center">
        {heading}
      </Heading>
    </div>
  </header>
);

BannerHeader.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default cssModules(BannerHeader, styles);
