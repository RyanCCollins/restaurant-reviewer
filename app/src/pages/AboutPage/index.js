import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AppFooter, AboutInfo } from 'components';
import { updatePageTitle } from 'utils/a11y';

class AboutPage extends Component {
  componentDidMount() {
    updatePageTitle('About Page');
  }
  render() {
    return (
      <div className={styles.container}>
        <AboutInfo />
        <AppFooter />
      </div>
    );
  }
}

export default cssModules(AboutPage, styles);
