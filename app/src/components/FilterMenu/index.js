import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Menu from 'grommet/components/Menu';
import Filter from 'grommet/components/icons/base/Filter';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

const FilterMenu = ({
  menuItems,
  onSelectItem,
}) => (
  <Menu
    icon={<Filter />}
    closeOnClick={false}
    className={styles.filterMenu}
    pad="medium"
  >
    <List selectable onSelect={onSelectItem}>
      {menuItems.map(item =>
        <ListItem justify="between">
          {item}
        </ListItem>
      )}
    </List>
  </Menu>
);

FilterMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};

export default cssModules(FilterMenu, styles);
