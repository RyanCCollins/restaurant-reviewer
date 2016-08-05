import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  SingleRestaurantContainer,
} from 'containers';

const SingleRestaurantPage = (props) => (
  <div className={styles.container}>
    <SingleRestaurantContainer {...props} />
  </div>
);

SingleRestaurantPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default cssModules(SingleRestaurantPage, styles);
