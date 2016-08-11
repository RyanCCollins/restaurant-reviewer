import React, { Component } from 'react';
import { FullReviewModal } from 'components';

class FullReviewModalContainer extends Component {
  render() {
    return (
      <FullReviewModal {...this.props} />
    );
  }
}

export default FullReviewModalContainer;
