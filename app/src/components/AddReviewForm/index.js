import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet/components/form';
import FormField from 'grommet/components/formfield';
import FormFields from 'grommet/components/formfields';
import Footer from 'grommet/components/footer';
import Button from 'grommet/components/button';
import NumberInput from 'grommet/components/numberinput';

class AddReviewForm extends Component {
  constructor() {
    super();
    this.handleFocus = this.handleFocus.bind(this);
  }
  componentDidMount() {
    this.handleFocus();
  }
  handleFocus() {
    this.refs.nameInput.focus();
  }
  render() {
    const {
      onSubmit,
      nameInput,
      ratingInput,
      textInput,
    } = this.props;
    return (
      <div className={styles.addReviewForm}>
        <Form onSubmit={onSubmit}>
          <FormFields>
            <FormField
              label="Name"
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
              label="Review"
              htmlFor="textInput"
              help="Add some text for your review"
              error={textInput.touched && textInput.error ? textInput.error : null}
            >
              <textarea
                {...textInput}
                id="textInput"
                name="text"
                type="text"
                rows="5"
                cols="40"
              />
            </FormField>
            <FormField
              label="Review"
              htmlFor="ratingInput"
              help="How many stars (1-5)"
              error={ratingInput.touched && ratingInput.error ? ratingInput.error : null}
            >
              <NumberInput
                {...ratingInput}
                min="1"
                max="5"
                id="ratingInput"
                name="rating"
              />
            </FormField>
          </FormFields>
          <Footer pad={{ vertical: 'medium' }}>
            <Button
              label="Submit"
              primary
              onClick={onSubmit}
              type="submit"
            />
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
  onSubmit: PropTypes.func.isRequired,
};

export default cssModules(AddReviewForm, styles);
