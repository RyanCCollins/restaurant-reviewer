import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AddReviewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Layer from 'grommet/components/layer';
import Header from 'grommet/components/header';
import Box from 'grommet/components/box';
import Button from 'grommet/components/button'
import { AddReviewForm } from 'components';

const Styles = {
  hidden: {
    display: 'none',
  },
  notHidden: {
    display: '',
  },
};

class AddReview extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }
  handleSubmit() {

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
              <AddReviewForm onSubmit={this.handleSubmit} />
            </Box>
          </Layer>
        :
          <Button
            label="Add Review"
            primary
            onClick={this.handleToggleModal}
          />
        }
      </div>
    );
  }
}

AddReview.propTypes = {
  isAddingReview: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
