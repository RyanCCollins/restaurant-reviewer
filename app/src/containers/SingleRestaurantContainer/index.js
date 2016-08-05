import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleRestaurantActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class SingleRestaurant extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.singleRestaurant}>
      </div>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SingleRestaurantActionCreators,
    dispatch
  ),
});

const Container = cssModules(SingleRestaurant, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
