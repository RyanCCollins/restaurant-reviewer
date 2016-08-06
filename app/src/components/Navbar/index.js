import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
// Grommet must be imported component by component (i.e. no destructuring)
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const Navbar = () => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <img
          className={styles.logo}
          src='https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/a11ylogo.png?raw=true'
          alt="logo"
        />
      </Title>
      <Menu direction="row" align="center" responsive={false}>
        <Anchor href="/">
          Home
        </Anchor>
      </Menu>
    </Header>
  </div>
);

export default cssModules(Navbar, styles);
