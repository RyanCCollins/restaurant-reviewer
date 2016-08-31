import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RestaurantsGridActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet/components/section';
import Article from 'grommet/components/article';
import Header from 'grommet/components/header';
import {
  RestaurantGrid,
  LoadingIndicator,
  ErrorAlert,
  FilterRestaurants,
  NoRestaurantsFound,
} from 'components';

const exists = (x) =>
  typeof x !== undefined && x && x.length > 0;

class RestaurantsGrid extends Component {
  constructor() {
    super();
    this.handleViewDetails = this.handleViewDetails.bind(this);
    this.handleClearErrors = this.handleClearErrors.bind(this);
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
    this.handleFilterRatings = this.handleFilterRatings.bind(this);
    this.handleFilterLocations = this.handleFilterLocations.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.handleFilterCategories = this.handleFilterCategories.bind(this);
    this.handleApplyFilters = this.handleApplyFilters.bind(this);
    this.getCurrentFilter = this.getCurrentFilter.bind(this);
  }
  componentDidMount() {
    const {
      actions,
    } = this.props;
    actions.loadRestaurants();
  }
  handleSwitchTab(e) {
    if (e.keyCode === 9) {
      console.log('Clicked tab');
    }
    ReactDOM.findDOMNode(this.refs.tabHeader).focus();
  }
  handleClearErrors() {
    const {
      actions,
    } = this.props;
    actions.clearRestaurantErrors();
  }
  handleViewDetails(id) {
    const {
      router,
    } = this.context;
    router.push(`/restaurants/${id}`);
  }
  handleClearFilter() {
    const {
      clearRestaurantsFilters,
    } = this.props.actions;
    clearRestaurantsFilters();
  }
  handleFilterRatings({ value }) {
    const {
      setFilterRating,
    } = this.props.actions;
    const rating = value.toString().split(' ')[0];
    setFilterRating(rating);
  }
  handleFilterLocations({ value }) {
    const {
      setFilterLocation,
    } = this.props.actions;
    setFilterLocation(value);
  }
  handleFilterCategories({ value }) {
    const {
      setFilterCategory,
    } = this.props.actions;
    setFilterCategory(value);
  }
  handleApplyFilters() {
    const {
      applyRestaurantsFilter,
    } = this.props.actions;
    applyRestaurantsFilter();
  }
  getCurrentFilter() {
    const {
      locationFilter,
      categoryFilter,
      ratingFilter,
    } = this.props;
    return {
      locationFilter,
      categoryFilter,
      ratingFilter,
    };
  }
  render() {
    const {
      isLoading,
      errors,
      categories,
      locations,
      ratings,
      restaurants,
      filterIsApplied,
    } = this.props;
    return (
      <div className={styles.restaurantsGrid}>
        <Article>
          <Header
            justify="center"
            tag="h1"
            pad={{ vertical: 'medium' }}
          >
            Restaurants
          </Header>
          <Section primary>
            {isLoading ?
              <LoadingIndicator
                isLoading={isLoading}
              />
            :
              <div>
                <ErrorAlert
                  errors={errors}
                  onClose={this.handleClearErrors}
                />
                  <FilterRestaurants
                    locations={locations}
                    ratings={ratings}
                    categories={categories}
                    onApplyFilters={this.handleApplyFilters}
                    filter={this.getCurrentFilter()}
                    isFiltering={filterIsApplied}
                    onClearFilter={this.handleClearFilter}
                    onFilterRatings={this.handleFilterRatings}
                    onFilterLocations={this.handleFilterLocations}
                    onFilterCategories={this.handleFilterCategories}
                  />
                  {exists(restaurants) ?
                    <RestaurantGrid
                      onViewDetails={this.handleViewDetails}
                      currentFilter={this.getCurrentFilter()}
                      isFiltered={filterIsApplied}
                      restaurants={restaurants}
                    />
                  :
                    <NoRestaurantsFound
                      filter={this.getCurrentFilter()}
                    />
                  }
              </div>
            }
          </Section>
        </Article>
      </div>
    );
  }
}

RestaurantsGrid.propTypes = {
  restaurants: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.array,
  ratingFilter: PropTypes.string.isRequired,
  locationFilter: PropTypes.string.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
  filterIsApplied: PropTypes.bool.isRequired,
};

RestaurantsGrid.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  restaurants: state.restaurants.filteredItems,
  isLoading: state.restaurants.isLoading,
  errors: state.restaurants.errors,
  categories: state.restaurants.categories,
  locations: state.restaurants.locations,
  ratings: state.restaurants.ratings,
  locationFilter: state.restaurants.locationFilter,
  categoryFilter: state.restaurants.categoryFilter,
  ratingFilter: state.restaurants.ratingFilter,
  filterIsApplied: state.restaurants.appliedFilter.isApplied,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    RestaurantsGridActionCreators,
    dispatch
  ),
});

const Container = cssModules(RestaurantsGrid, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
