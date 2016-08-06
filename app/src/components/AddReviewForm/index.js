import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet/components/form';
import FormField from 'grommet/components/formfield';
import FormFields from 'grommet/components/formfields';
import Footer from 'grommet/components/footer';
import Button from 'grommet/components/button';

const AddReviewForm = ({
  onNameChange,
  onReviewTextChange,
  onRatingChange,
  onSubmit,
  onStarChange,
  fields,
}) => (
  <div className={styles.addReviewForm}>
    <Form>
      <FormFields>
        <FormField label="Name" htmlFor="nameInput" help="What is your name">
          <input id="nameInput" value={fields.value} name="name" onChange={onNameChange} />
        </FormField>
        <FormField
          label="Review"
          htmlFor="textInput"
          help="Add some text for your review"
        >
          <input
            id="textInput"
            name="text"
            type="text"
            rows="5"
            cols="40"
            onChange={onReviewTextChange}
            value={fields.text}
          />
        </FormField>
        <FormField label="Review" htmlFor="starInput" help="How many stars (1-5)">
          <input
            min="1"
            max="5"
            type="number"
            id="starInput"
            name="reviewText"
            onChange={onStarChange}
            value={fields.star}
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

AddReviewForm.propTypes = {

};

export default cssModules(AddReviewForm, styles);
