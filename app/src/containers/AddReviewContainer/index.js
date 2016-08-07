import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AddReviewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import validation from './validation/index';
import { AddReviewForm } from 'components';
import { reduxForm } from 'redux-form';
import Footer from 'grommet/components/footer';
import Layer from 'grommet/components/layer';
import Box from 'grommet/components/box';
import Button from 'grommet/components/button';

export const addReviewFields = [
  'nameInput',
  'textInput',
  'ratingInput',
];

class AddReview extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }
  handleToggleModal() {
    const {
      actions,
    } = this.props;
    actions.toggleAddReview();
  }
  render() {
    const {
      isAddingReview,
      fields,
      onSubmit,
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
            <Box pad={{ vertical: 'large', horizontal: 'small' }}>
              <AddReviewForm {...fields} onSubmit={onSubmit} />
            </Box>
          </Layer>
        :
          <Footer className={styles.addReviewFooter} primary={false}>
            <Button
              label="Add Review"
              className={styles.button}
              primary
              onClick={this.handleToggleModal}
            />
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
  onSubmit: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isAddingReview: state.addReview.isAddingReview,
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
