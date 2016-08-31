import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SronlyContent = ({
  children,
}) => (
  <span className={styles.sronlyContent}>
    {children}
  </span>
);

SronlyContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cssModules(SronlyContent, styles);
