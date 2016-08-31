/**
* By Ryan Collins
* @Date:   2016-08-16T19:55:00-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T20:00:28-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Menu from 'grommet/components/Menu';
import Filter from 'grommet/components/icons/base/Filter';
import Anchor from 'grommet/components/Anchor';

const itemsAreEqual = (item, value) =>
  item === value || item === value.split(' ')[0];

class FilterMenu extends Component {
  render() {
    const {
      menuItems,
      onSelectItem,
      label,
      selectedItem,
    } = this.props;
    return (
      <Menu
        icon={<Filter />}
        closeOnClick={false}
        label={label}
        className={styles.filterMenu}
        pad="medium"
        dropAlign={{ left: 'left', top: 'bottom' }}
      >
        {menuItems.map((item, i) =>
          <Anchor
            kef={i}
            ref="anchorRef"
            className={itemsAreEqual(selectedItem, item.value) ?
              styles.anchorSelected : styles.anchor}
            href="#"
            onClick={() => // eslint-disable-line react/jsx-no-bind
              onSelectItem({ value: item.value })
            }
          >
            {item.value}
          </Anchor>
        )}
      </Menu>
    );
  }
}

FilterMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selectedItem: PropTypes.string,
};

export default cssModules(FilterMenu, styles);
