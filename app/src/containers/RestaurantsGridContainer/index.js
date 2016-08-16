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

const visibleRestaurants = (restaurants, filter, property) =>
  restaurants.filter(i => i[property] === filter);

class RestaurantsGrid extends Component {
  constructor() {
    super();
    this.handleViewDetails = this.handleViewDetails.bind(this);
    this.handleClearErrors = this.handleClearErrors.bind(this);
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
    this.handleFilterRatings = this.handleFilterRatings.bind(this);
    this.handleFilterLocation = this.handleFilterRatings.bind(this);
    this.handleRestaurantFiltering = this.handleRestaurantFiltering.bind(this);
    this.state = {
      filteredRestaurants: [],
    };
  }
  componentDidMount() {
    const {
      actions,
    } = this.props;
    actions.loadRestaurants();
  }
  componentWillReceiveProps(newProps) {
    const {
      restaurants,
    } = newProps;
    if (restaurants.length > 0) {
      this.handleRestaurantFiltering();
    }
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
  handleFilterRatings(rating) {
    const {
      actions,
    } = this.props;
    actions.filterRestaurantsByRating();
  }
  handleFilterLocation(location) {
    const {
      actions,
    } = this.props;
    actions.filterRestaurantsByLocation();
  }
  handleRestaurantFiltering() {
    const {
      restaurants,
      selectedFilterIndex,
      categories,
      locationFilter,
      ratingFilter,
    } = this.props;
    const category = categories[selectedFilterIndex];
    if (typeof category !== 'undefined' && category !== 'All') {
      const filteredRestaurants = restaurants.filter(rest =>
        rest.type.name === category,
      );
      this.setState({
        filteredRestaurants,
      });
    } else if (typeof locationFilter !== 'undefined' &&
                      locationFilter !== 'All') {
      const filteredRestaurants = restaurants.filter(rest =>
        rest.city === locationFilter,
      );
      this.setState({
        filteredRestaurants,
      });
    } else if (typeof ratingFilter !== 'undefined' &&
                      ratingFilter !== 'All') {
      const filteredRestaurants = restaurants.filter(rest =>
        rest.average_rating === parseInt(ratingFilter, 10),
      );
      this.setState({
        filteredRestaurants,
      });
    } else {
      this.setState({
        filteredRestaurants: restaurants,
      });
    }
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
    const {
      filteredRestaurants,
    } = this.state;
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
                          filteredRestaurants.length > 0 &&
                        <FilterRestaurants
                          restaurants={filteredRestaurants.length > 0 && filteredRestaurants}
                          locations={locations}
                          ratings={ratings}
                          onFilterRatings={this.handleFilterRatings}
                          onFilterLocations={this.handleFilterLocations}
                        />
                      }
                      {filteredRestaurants.length > 0 &&
                        <RestaurantGrid
                          onViewDetails={this.handleViewDetails}
                          restaurants={filteredRestaurants}
                        />
                      }
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
