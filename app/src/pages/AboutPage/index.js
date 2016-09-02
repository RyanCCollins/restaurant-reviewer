import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AppFooter } from 'components';


// Pages map directly to Routes, i.e. one page equals on Route

const AboutPage = (props) => (
  <div className={styles.container}>
    <AppFooter />
  </div>
);

export default cssModules(AboutPage, styles);
