import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AddReviewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import validation from './validation/index';
import {
  AddReviewForm,
  AddButton,
  ErrorAlert,
} from 'components';
import { reduxForm } from 'redux-form';
import Footer from 'grommet/components/footer';
import Layer from 'grommet/components/layer';
import Box from 'grommet/components/box';
import Button from 'grommet/components/button';
import Menu from 'grommet/components/menu';

export const addReviewFields = [
  'nameInput',
  'textInput',
  'ratingInput',
];

class AddReview extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleReviewInvalid = this.handleReviewInvalid.bind(this);
    this.handleClearErrors = this.handleClearErrors.bind(this);
  }
  handleToggleModal() {
    const {
      actions,
      isAddingReview,
    } = this.props;
    if (isAddingReview) {
      document.getElementById('app').classList.remove('no-scroll');
      this.handleClear();
    } else {
      document.getElementById('app').classList.add('no-scroll');
    }
    actions.toggleAddReview();
  }
  handleReviewInvalid() {
    const {
      actions,
    } = this.props;
    actions.addReviewInvalid({
      message: 'The review was invalid.  Please correct and try again',
    });
  }
  handleSubmitReview(review) {
    const {
      onSubmitReview,
    } = this.props;
    onSubmitReview(review);
    this.handleToggleModal();
  }
  handleClear() {
    const {
      resetForm,
    } = this.props;
    resetForm();
  }
  handleClearErrors() {
    const {
      actions,
    } = this.props;
    actions.clearAddReviewErrors();
  }
  render() {
    const {
      isAddingReview,
      fields,
      hasFab,
      resetForm,
      error,
    } = this.props;
    return (
      <div className={styles.addReview}>
        {isAddingReview ?
          <Layer
            onClose={this.handleToggleModal}
            a11yTitle={'Add Review Form'}
            closer
            align="right"
          >
            {typeof error !== undefined &&
              <Box pad={{ vertical: 'large', horizontal: 'small' }}>
                <ErrorAlert
                  errors={[error]}
                  onClose={this.handleClearErrors}
                />
              </Box>
            }
            <Box pad={{ vertical: 'large', horizontal: 'small' }}>
              <AddReviewForm
                {...fields}
                onSubmitReview={this.handleSubmitReview}
                onSubmitReviewInvalid={this.handleReviewInvalid}
                onClear={resetForm}
              />
            </Box>
          </Layer>
        :
          <Footer className={styles.addReviewFooter}>
            <Menu direction="row">
              <Button
                className={styles.button}
                label="Add Review"
                primary
                onClick={this.handleToggleModal}
              />
            </Menu>
            {hasFab &&
              <AddButton onAdd={this.handleToggleModal} />
            }
          </Footer>
        }
      </div>
    );
  }
}

AddReview.propTypes = {
  isAddingReview: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  onSubmitReview: PropTypes.func.isRequired,
  hasFab: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired,
  error: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isAddingReview: state.addReview.isAddingReview,
  error: state.addReview.error,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AddReviewActionCreators,
    dispatch
  ),
});

const Container = cssModules(AddReview, styles);

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default reduxForm({
  form: 'addReview',
  fields: addReviewFields,
  validate: validation,
})(ConnectedContainer);
