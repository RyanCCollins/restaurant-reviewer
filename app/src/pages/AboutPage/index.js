import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AppFooter, AboutInfo } from 'components';

const AboutPage = () => (
  <div className={styles.container}>
    <AboutInfo />
    <AppFooter />
  </div>
);

export default cssModules(AboutPage, styles);
