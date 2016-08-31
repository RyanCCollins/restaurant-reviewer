import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SrOnlyContent = ({
  children,
}) => (
  <span className={styles.sronlyContent}>
    {children}
  </span>
);

SrOnlyContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cssModules(SrOnlyContent, styles);
