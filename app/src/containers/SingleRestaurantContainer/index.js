import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleRestaurantActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class SingleRestaurant extends Component {
  constructor(props) {
    super(props);
    const {
      restaurantId,
    } = this.props.location.query;
    const {
      restaurants,
    } = props;
    this.state = {
      selectedRestaurant: restaurants.filter(i =>
        i.id === restaurantId
      )[0],
    };
    this.handleLoadingReviews = this.handleLoadingReviews.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
  }
  componentDidMount() {
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
            {selectedRestaurant}
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

SingleRestaurant.propTypes = {
  reviews: PropTypes.array,
  errors: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  restaurants: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
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

const Container = cssModules(SingleRestaurant, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
