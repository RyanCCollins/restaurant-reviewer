/**
* By Ryan Collins
* @Date:   2016-08-16T19:54:33-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:40-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import 'styles/styles.scss';
import { Navbar } from 'components';
import AppComponent from 'grommet/components/app';

const App = (props) => (
  <AppComponent lang="en-US">
    <Navbar />
    <main id="content">
      {React.cloneElement(props.children, props)}
    </main>
  </AppComponent>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default App;
