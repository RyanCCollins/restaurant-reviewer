import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleRestaurantActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  SingleRestaurant,
  ReviewGrid,
  LoadingIndicator,
  ErrorAlert,
} from 'components';
import { AddReviewContainer, FullReviewModalContainer } from 'containers';
import Section from 'grommet/components/section';

class SingleRestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLoadingOfRestaurant = this.handleLoadingOfRestaurant.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
    this.handleCloseReview = this.handleCloseReview.bind(this);
    this.handleOpenReview = this.handleOpenReview.bind(this);
    this.state = {
      selectedRestaurant: null,
    };
  }
  componentDidMount() {
    this.handleLoadingOfRestaurant();
  }
  handleLoadingOfRestaurant() {
    const {
      restaurants,
      params,
    } = this.props;
    const itemId = parseInt(params.id, 10);
    const selectedRestaurant = restaurants.filter(item => item.id === itemId)[0];
    if (!selectedRestaurant) {
      const {
        router,
      } = this.context;
      router.push('/');
    }
    this.setState({
      selectedRestaurant,
    });
  }
  handleSubmitReview(review) {
    const {
      actions,
    } = this.props;
    const {
      selectedRestaurant,
    } = this.state;
    actions.submitReview(review, selectedRestaurant);
  }
  handleCloseReview() {
    const {
      actions,
    } = this.props;
    document.getElementById('app').classList.remove('no-scroll');
    actions.closeFullReview();
  }
  handleOpenReview(id) {
    const {
      actions,
    } = this.props;
    document.getElementById('app').classList.add('no-scroll');
    actions.openFullReview(id);
  }
  render() {
    const {
      selectedRestaurant,
    } = this.state;
    const {
      selectedReviewId,
      isLoading,
      errors,
    } = this.props;
    return (
      <div className={styles.singleRestaurant}>
        {selectedRestaurant ?
          <Section className={styles.noPad}>
            <SingleRestaurant restaurant={selectedRestaurant} />
            <AddReviewContainer
              hasFab
              onClear={this.handleClear}
              onSubmitReview={this.handleSubmitReview}
            />
            {isLoading &&
              <LoadingIndicator isLoading />
            }
            {errors.length > 0 &&
              <ErrorAlert errors={errors} />
            }
            <ReviewGrid
              onClickReview={this.handleOpenReview}
              reviews={selectedRestaurant.reviews}
            />
            <FullReviewModalContainer
              onToggleClose={this.handleCloseReview}
              isOpen={selectedReviewId !== null}
              review={selectedRestaurant.reviews.filter(item =>
                item.id === selectedReviewId
              )[0]}
            />
          </Section>
        :
          <div className={styles.containerCenter}>
            <h1 className={styles.noneFound}>No Restaurant Found</h1>
            <h4>{'Going back home where it\'s safe!'}</h4>
          </div>
        }
      </div>
    );
  }
}

SingleRestaurantContainer.propTypes = {
  selectedReviewId: PropTypes.number,
  errors: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  restaurants: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  addReviewData: PropTypes.object,
};

SingleRestaurantContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errors: state.singleRestaurant.errors,
  isLoading: state.singleRestaurant.isLoading,
  restaurants: state.restaurants.items,
  addReviewData: state.form.addReview,
  selectedReviewId: state.singleRestaurant.selectedReviewId,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SingleRestaurantActionCreators,
    dispatch
  ),
});

const Container = cssModules(SingleRestaurantContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
