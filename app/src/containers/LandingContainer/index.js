import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  Hero,
} from 'grommet';

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    
  }
  render() {
    return (
      <div className={styles.landing}>
        <Hero
          backgroundImage="https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/main.jpg?raw=true"
          flush
          size={'small'}
        />
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
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(Landing, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
