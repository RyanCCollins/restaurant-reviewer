import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as SingleRestaurantActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  SingleRestaurant,
  ReviewGrid,
  FullReviewModal,
} from 'components';
import { AddReviewContainer } from 'containers';
import Section from 'grommet/components/section';

const validateReview = (x) =>
  x.total_stars !== null &&
    x.text !== null &&
      x.name !== null;

class SingleRestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLoadingReviews = this.handleLoadingReviews.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleCloseReview = this.handleCloseReview.bind(this);
    this.handleOpenReview = this.handleOpenReview.bind(this);
    this.state = {
      selectedRestaurant: null,
    };
  }
  componentDidMount() {
    const {
      restaurants,
      params,
    } = this.props;
    const itemId = parseInt(params.id);
    const selectedRestaurant = restaurants.filter(item => item.id === itemId)[0];
    if (!selectedRestaurant) {
      const {
        router,
      } = this.context;
      router.push('/');
    } else {
      this.state = {
        selectedRestaurant,
      };
      this.handleLoadingReviews();
    }
  }
  handleLoadingReviews() {
    const {
      actions,
    } = this.props;
    const {
      selectedRestaurant,
    } = this.state;
    if (selectedRestaurant !== null || typeof selectedRestaurant !== 'undefined') {
      const {
        id,
      } = selectedRestaurant;
      actions.loadReviews(id);
    } else {
      const error = new Error('The selected Restaurant cannot be found.');
      actions.reviewsErrors([error]);
    }
  }
  handleClear() {

  }
  handleSubmitReview() {
    const {
      actions,
      addReviewData,
    } = this.props;
    const review = {
      name: addReviewData.nameInput.value,
      text: addReviewData.textInput.value,
      total_stars: addReviewData.ratingInput.value,
    };
    if (validateReview(review)) {
      actions.submitReview(review);
    }
  }
  handleCloseReview() {
    const {
      actions,
    } = this.props;
    actions.closeFullReview();
  }
  handleOpenReview(id) {
    const {
      actions,
    } = this.props;
    actions.openFullReview(id);
  }
  render() {
    const {
      selectedRestaurant,
      selectedReviewId,
    } = this.state;
    return (
      <div className={styles.singleRestaurant}>
        {selectedRestaurant ?
          <Section>
            <SingleRestaurant restaurant={selectedRestaurant} />
            <AddReviewContainer
              hasFab
              onClear={this.handleClear}
              onSubmit={this.handleSubmitReview}
            />
            <ReviewGrid
              onClickReview={this.handleOpenReview}
              reviews={selectedRestaurant.reviews}
            />
            <FullReviewModal
              isOpen={selectedReviewId === null}
              review={selectedRestaurant.reviews[selectedReviewId]}
              onToggleClose={this.handleCloseReview}
            />
          </Section>
        :
          <div className={styles.containerCenter}>
            <h1 className={styles.noneFound}>No Restaurant Found</h1>
            <h4>Going back home where it's safe!</h4>
          </div>
        }
      </div>
    );
  }
}

SingleRestaurantContainer.propTypes = {
  reviews: PropTypes.array,
  selectedReviewId: PropTypes.object,
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
  reviews: state.singleRestaurant.reviews,
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
