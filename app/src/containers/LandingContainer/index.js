import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  Headline,
  Spinning,
} from 'grommet';
import {
  HeroCarousel,
} from 'components';

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleLoading = this.handleLoading.bind(this);
  }
  componentDidMount() {
    this.handleLoading();
  }
  handleLoading() {
    const {
      actions,
    } = this.props;
    actions.loadImagesAsync();
  }
  render() {
    const {
      images,
      isLoading,
    } = this.props;
    return (
      <div className={styles.landing}>
        {!isLoading ?
          <HeroCarousel images={images} />
        :
          <Spinning />
        }
        <Headline size="large" align="center" margin="large">
          Restaurant Reviewer
        </Headline>
      </div>
    );
  }
}

Landing.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  images: state.landing.images,
  isLoading: state.landing.isLoading,
  errors: state.landing.errors,
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
