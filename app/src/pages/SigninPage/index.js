import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  SigninContainer,
} from 'containers';

const SigninPage = () => (
  <div className={styles.container}>
    <SigninContainer />
  </div>
);

export default cssModules(SigninPage, styles);
