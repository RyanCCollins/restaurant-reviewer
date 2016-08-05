import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SigninActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class Signin extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.signin}>
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
    SigninActionCreators,
    dispatch
  ),
});

const Container = cssModules(Signin, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
