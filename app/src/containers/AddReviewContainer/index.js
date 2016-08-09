import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AddReviewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import validation from './validation/index';
import { AddReviewForm, AddButton, } from 'components';
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
    this.handleClear = this.handleClear.bind(this);
  }
  handleToggleModal() {
    const {
      actions,
    } = this.props;
    actions.toggleAddReview();
  }
  handleClear() {

  }
  render() {
    const {
      isAddingReview,
      fields,
      onSubmitReview,
      onClear,
      hasFab,
    } = this.props;
    return (
      <div className={styles.addReview}>
        {hasFab ?
          <div className={styles.fabContainer}>
            <div className={styles.fab}>
              <AddButton
                className={styles.fabButton}
                colorIndex="white"
                onAdd={this.handleToggleModal}
              />
            </div>
          </div>
        :
          <noscript />
        }
        {isAddingReview ?
          <Layer
            onClose={this.handleToggleModal}
            a11yTitle={'Add Review Form'}
            closer
            align="right"
          >
            <Box pad={{ vertical: 'large', horizontal: 'small' }}>
              <AddReviewForm {...fields} onSubmitReview={onSubmitReview} onClear={onClear} />
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
  onClear: PropTypes.func.isRequired,
  hasFab: PropTypes.bool.isRequired,
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
