import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReviewGridActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class ReviewGrid extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.reviewGrid}>
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
    ReviewGridActionCreators,
    dispatch
  ),
});

const Container = cssModules(ReviewGrid, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
