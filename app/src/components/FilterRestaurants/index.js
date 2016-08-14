import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Form from 'grommet/components/Form';

const FilterRestaurants = ({
  restaurants,
  onApplyFilter,
  isOpen,
  onToggleClose,
  locationInput,
  cuisineInput,
  starRatingInput,
}) => (
  <Layer
    hidden={!isOpen}
    onClose={onToggleClose}
    align="center"
    closer
    className={styles.filterRestaurants}
  >
    <Form onSubmit={onApplyFilter}>
      <FormFields>
        <FormField
          label="Filter by Location"
          htmlFor="locationInput"
          error={locationInput.touched && locationInput.error ? locationInput.error : null}
        >
          <select name="locationInput" id="locationInput">
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
          </select>
        </FormField>
        <FormField
          label="Filter by Location"
          htmlFor="locationInput"
          error={locationInput.touched && locationInput.error ? locationInput.error : null}
        >
          <select name="location">
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
          </select>
        </FormField>
        <FormField
          label="Filter by Location"
          htmlFor="locationInput"
          error={locationInput.touched && locationInput.error ? locationInput.error : null}
        >
          <select name="location">
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
          </select>
        </FormField>
      </FormFields>
    </Form>
  </Layer>
);

FilterRestaurants.propTypes = {

};

export default cssModules(FilterRestaurants, styles);
