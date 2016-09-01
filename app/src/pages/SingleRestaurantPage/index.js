import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  SingleRestaurantContainer,
} from 'containers';
import { updatePageTitle } from 'utils/a11y';

class SingleRestaurantPage extends Component {
  componentDidMount() {
    updatePageTitle('Restaurant Details');
  }
  render() {
    return (
      <div className={styles.container}>
        <SingleRestaurantContainer {...this.props} />
      </div>
    );
  }
}

SingleRestaurantPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default cssModules(SingleRestaurantPage, styles);
