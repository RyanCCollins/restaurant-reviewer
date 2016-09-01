/**
* By Ryan Collins
* @Date:   2016-08-16T19:54:09-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:48-04:00
* @License: All rights reserved.

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
*/


import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet/components/form';
import FormField from 'grommet/components/formfield';
import FormFields from 'grommet/components/formfields';
import Footer from 'grommet/components/footer';
import Button from 'grommet/components/button';
import NumberInput from 'grommet/components/numberinput';
import Menu from 'grommet/components/menu';

const itemInvalid = (item) =>
  item.touched && item.error;

class AddReviewForm extends Component {
  constructor() {
    super();
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
    this.validateReview = this.validateReview.bind(this);
    this.formIsInvalid = this.formIsInvalid.bind(this);
  }
  formIsInvalid() {
    const {
      ratingInput,
      nameInput,
      textInput,
    } = this.props;
    return itemInvalid(ratingInput) ||
      itemInvalid(nameInput) ||
      itemInvalid(textInput);
  }
  validateReview(review) {
    const length = Object.keys(review).length;
    return Object
      .keys(review)
      .filter(i => {
        if (typeof review[i] === 'number') {
          return review[i] >= 1 && review[i] <= 5;
        }
        return review[i].length > 0;
      })
      .length === length;
  }
  handleSubmitReview() {
    const {
      nameInput,
      ratingInput,
      textInput,
      onSubmitReview,
      onSubmitReviewInvalid,
    } = this.props;
    const review = {
      name: nameInput.value,
      rating: parseInt(ratingInput.value, 10) || 0,
      text: textInput.value,
    };
    if (this.validateReview(review)) {
      onSubmitReview(review);
    } else {
      onSubmitReviewInvalid();
    }
  }
  render() {
    const {
      onSubmitReview,
      nameInput,
      ratingInput,
      textInput,
      onClear,
    } = this.props;
    return (
      <Form onSubmit={onSubmitReview}>
        <FormFields>
          <FormField
            label="Your Name"
            htmlFor="reviewNameInput"
            help="What is your name"
            error={nameInput.touched && nameInput.error ? nameInput.error : null}
          >
            <input
              {...nameInput}
              ref="nameInput"
              id="reviewNameInput"
              type="text"
              name="name"
            />
          </FormField>
          <FormField
            label="Your Review Text"
            htmlFor="reviewTextInput"
            help="Add some text for your review"
            error={textInput.touched && textInput.error ? textInput.error : null}
          >
            <textarea
              {...textInput}
              id="reviewTextInput"
              ref="reviewTextInput"
              type="text"
              rows="5"
              cols="40"
            />
          </FormField>
          <FormField
            label="Your Rating"
            htmlFor="reviewRatingInput"
            help="How many stars (1-5)"
            error={ratingInput.touched && ratingInput.error ? ratingInput.error : null}
          >
            <NumberInput
              {...ratingInput}
              min={1}
              ref="reviewRatingInput"
              max={5}
              id="reviewRatingInput"
              name="rating"
            />
          </FormField>
        </FormFields>
        <Footer className={styles.footer}>
          <Menu direction="row">
            <Button
              className={styles.button}
              label="Submit"
              primary
              disabled={this.formIsInvalid}
              onClick={this.handleSubmitReview}
            />
            <Button label="Clear" onClick={onClear} />
          </Menu>
        </Footer>
      </Form>
    );
  }
}

AddReviewForm.propTypes = {
  nameInput: PropTypes.object.isRequired,
  textInput: PropTypes.object.isRequired,
  ratingInput: PropTypes.object.isRequired,
  onSubmitReview: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onSubmitReviewInvalid: PropTypes.func.isRequired,
};

export default cssModules(AddReviewForm, styles);
