/**
* @Date:   2016-08-16T19:56:27-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:56:31-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
// Grommet must be imported component by component (i.e. no destructuring)
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import { Link } from 'react-router';

const Navbar = () => (
  <Header justify="between" className={styles.navbar}>
    <Title>
      <Link to="/">
        <img
          className={styles.logo}
          src='https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/a11ylogo.png?raw=true'
          alt="A11y Written in rainbow colors"
        />
      </Link>
    </Title>
    <Menu className={styles.menu} direction="row" align="center" responsive={false}>
      <Anchor href="/">
        Home
      </Anchor>
    </Menu>
  </Header>
);

export default cssModules(Navbar, styles);
