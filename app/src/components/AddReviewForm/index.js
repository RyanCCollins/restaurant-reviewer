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
    return Object.keys(review).forEach(item => {
      if (typeof review[item] === 'number') {
        return review[item] >= 1 || review[item] <= 5;
      }
      return review[item].length > 0;
    });
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
      <div className={styles.addReviewForm}>
        <Form onSubmit={onSubmitReview}>
          <FormFields>
            <FormField
              label="Name Input"
              htmlFor="nameInput"
              help="What is your name"
              error={nameInput.touched && nameInput.error ? nameInput.error : null}
            >
              <input
                {...nameInput}
                ref="nameInput"
                id="nameInput"
                type="text"
                name="name"
              />
            </FormField>
            <FormField
              label="Review Text"
              htmlFor="textInput"
              help="Add some text for your review"
              error={textInput.touched && textInput.error ? textInput.error : null}
            >
              <textarea
                {...textInput}
                id="textInput"
                ref="textInput"
                name="text"
                type="text"
                rows="5"
                cols="40"
              />
            </FormField>
            <FormField
              label="Rating Input"
              htmlFor="ratingInput"
              help="How many stars (1-5)"
              error={ratingInput.touched && ratingInput.error ? ratingInput.error : null}
            >
              <NumberInput
                {...ratingInput}
                min={1}
                ref="ratingInput"
                max={5}
                id="ratingInput"
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
      </div>
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
