import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  Carousel,
  Box,
} from 'grommet';

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.landing}>
        <Carousel>
          <Box pad="large" colorIndex="neutral-3">
            <Box pad="medium" colorIndex="neutral-2">
              Content inside of a Box element.
            </Box>
          </Box>
          <Box pad="large" colorIndex="neutral-3">
            <Box pad="medium" colorIndex="neutral-2">
              Content inside of a Box element.
            </Box>
          </Box>
        </Carousel>
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
