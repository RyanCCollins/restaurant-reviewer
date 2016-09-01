import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet/components/Section';
import {
  HeroCarousel,
  LoadingIndicator,
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
      loadImagesAsync,
    } = this.props.actions;
    loadImagesAsync();
  }
  render() {
    const {
      restaurants,
      isLoading,
    } = this.props;
    return (
      <Section className={styles.landing}>
        {!isLoading ?
          <HeroCarousel restaurants={restaurants} />
        :
          <LoadingIndicator isLoading={isLoading} />
        }
      </Section>
    );
  }
}

Landing.propTypes = {
  restaurants: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  restaurants: state.featured.restaurants,
  isLoading: state.featured.isLoading,
  errors: state.featured.errors,
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
