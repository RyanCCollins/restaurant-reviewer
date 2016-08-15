import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RestaurantsGridActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Tabs from 'grommet/components/tabs';
import Tab from 'grommet/components/tab';
import Section from 'grommet/components/section';
import Article from 'grommet/components/article';
import Header from 'grommet/components/header';
import {
  RestaurantGrid,
  LoadingIndicator,
  ErrorAlert,
  FilterRestaurants,
} from 'components';

class RestaurantsGrid extends Component {
  constructor() {
    super();
    this.handleViewDetails = this.handleViewDetails.bind(this);
    this.handleClearErrors = this.handleClearErrors.bind(this);
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
    this.handleFilterRatings = this.handleFilterRatings.bind(this);
    this.handleFilterLocation = this.handleFilterRatings.bind(this);
    this.getFilteredRestaurants = this.getFilteredRestaurants.bind(this);
  }
  componentDidMount() {
    const {
      actions,
    } = this.props;
    actions.loadRestaurants();
  }
  handleViewDetails(id) {
    const {
      router,
    } = this.context;
    router.push(`/restaurants/${id}`);
  }
  handleClearErrors() {
    const {
      actions,
    } = this.props;
    actions.clearRestaurantErrors();
  }
  handleSwitchTab(e) {
    if (e.keyCode === 9) {
      console.log('Clicked tab');
    }
    ReactDOM.findDOMNode(this.refs.tabHeader).focus();
  }
  handleFilterRatings() {

  }
  handleFilterLocation() {

  }
  getFilteredRestaurants() {
    const {
      restaurants,
      selectedFilterIndex,
      categories,
      locationFilter,
      ratingFilter,
    } = this.props;
    const category = categories[selectedFilterIndex];
    if (category !== 'All') {
      return restaurants.filter(rest =>
        rest.type.name === category,
      );
    }
    if (locationFilter !== 'All') {
      return restaurants.filter(rest =>
        rest.city === locationFilter,
      );
    } else if (ratingFilter !== 'All') {
      return restaurants.filter(rest =>
        rest.average_rating === parseInt(ratingFilter, 10),
      );
    }
    return restaurants;
  }
  render() {
    const {
      isLoading,
      errors,
      selectedFilterIndex,
      categories,
      locations,
      ratings,
    } = this.props;
    return (
      <div className={styles.restaurantsGrid}>
        <Article>
          <Header justify="center" tag="h1" pad={{ vertical: 'medium' }}>
            Restaurants
          </Header>
          <Section primary>
            {isLoading ?
              <LoadingIndicator isLoading />
            :
              <div>
                <ErrorAlert errors={errors} onClose={this.handleClearErrors} />
                <Tabs initialIndex={selectedFilterIndex} justify="center">
                  {typeof categories !== 'undefined' && categories.map((cat, i) =>
                    <Tab key={i} onKeyUp={this.handleSwitchTab} title={cat}>
                      <Header justify="center" tag="h3">
                        {`${cat} Restaurants`}
                      </Header>
                      {categories[selectedFilterIndex] === 'All' &&
                        <FilterRestaurants
                          restaurants={this.getFilteredRestaurants}
                          locations={locations}
                          ratings={ratings}
                          onFilterRatings={this.handleFilterRatings}
                          onFilterLocations={this.handleFilterLocations}
                        />
                      }
                      <RestaurantGrid
                        onViewDetails={this.handleViewDetails}
                        restaurants={this.getFilteredRestaurants}
                      />
                    </Tab>
                  )}
                </Tabs>
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
  selectedFilterIndex: PropTypes.number.isRequired,
  ratingFilter: PropTypes.string.isRequired,
  locationFilter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
};

RestaurantsGrid.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  restaurants: state.restaurants.items,
  selectedFilterIndex: state.restaurants.selectedFilterIndex,
  isLoading: state.restaurants.isLoading,
  errors: state.restaurants.errors,
  categories: state.restaurants.categories,
  locations: state.restaurants.locations,
  ratings: state.restaurants.ratings,
  locationFilter: state.restaurants.selectedLocationFilter,
  ratingFilter: state.restaurants.selectedLocationFilter,
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
