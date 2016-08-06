import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleRestaurantActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SingleRestaurant, ReviewGrid } from 'components';
import { AddReviewContainer } from 'containers';

class SingleRestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLoadingReviews = this.handleLoadingReviews.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
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
    this.state = {
      selectedRestaurant,
    };
    this.handleLoadingReviews();
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
  handleSubmitReview(review) {
    const {
      actions,
    } = this.props;
    actions.submitReview(review);
  }
  render() {
    const {
      selectedRestaurant,
    } = this.state;
    return (
      <div className={styles.singleRestaurant}>
        {selectedRestaurant ?
          <div>
            <SingleRestaurant restaurant={selectedRestaurant} />
            <AddReviewContainer />
            <ReviewGrid reviews={selectedRestaurant.reviews} />
          </div>
        :
          <div className={styles.noneFoundContainer}>
            <h1 className={styles.noneFound}>No Restaurant Found</h1>
          </div>
        }
      </div>
    );
  }
}

SingleRestaurantContainer.propTypes = {
  reviews: PropTypes.array,
  errors: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  restaurants: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  reviews: state.singleRestaurant.reviews,
  errors: state.singleRestaurant.errors,
  isLoading: state.singleRestaurant.isLoading,
  restaurants: state.restaurants.items,
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
