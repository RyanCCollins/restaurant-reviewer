import React, { Component } from 'react';
import { FullReviewModal } from 'components';

class FullReviewModalContainer extends Component {
  constructor() {
    super();
    this.handleTabs = this.handleTabs.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleTabs);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleTabs);
  }
  handleTabs(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  }
  render() {
    return (
      <FullReviewModal {...this.props} />
    );
  }
}

export default FullReviewModalContainer;
