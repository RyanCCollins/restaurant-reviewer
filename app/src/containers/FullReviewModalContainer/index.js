import React, { Component } from 'react';
import { FullReviewModal } from 'components';

class FullReviewModalContainer extends Component {
  constructor() {
    super();
    this.handleTabs = this.handleTabs.bind(this);
  }
  componentDidMount() {
    const element = document.querySelector('.grommetux-layer__closer button');
    if (typeof element !== 'undefined' || !element) {
      element.focus();
    }
  }
  handleTabs(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  }
  render() {
    return (
      <FullReviewModal {...this.props} onKeyPress={this.handleTabs} />
    );
  }
}

export default FullReviewModalContainer;
