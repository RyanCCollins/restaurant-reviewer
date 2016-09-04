/**
* By Ryan Collins
* @Date:   2016-08-16T19:54:23-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:54-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Add from 'grommet/components/icons/base/Add';
import Button from 'grommet/components/button';

const AddButton = ({
  onAdd,
}) => (
  <div className={styles.fabContainer}>
    <div className={styles.fab}>
      <Button
        className={styles.addButton}
        icon={
          <Add
            a11yTitle="Add Review Floating"
            a11yTitleId="add-review-floating-button-icon"
            className={styles.icon}
          />
        }
        onClick={onAdd}
        a11yTitle="Add Review Floating"
        a11yTitleId="add-review-floating-button"
      />
    </div>
  </div>
);

AddButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default cssModules(AddButton, styles);
