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
  label,
  selectedItem,
}) => (
  <Menu
    icon={<Filter />}
    closeOnClick={false}
    label={label}
    className={styles.filterMenu}
    pad="medium"
  >
    <List selectable onSelect={onSelectItem} selected={selectedItem}>
      {menuItems.map((item, i) => /* eslint-disable */
        <ListItem
          key={i}
          ref={`list-item-${item.id}`}
          justify="between"
          onClick={() => onSelectItem(item.id)}
        > /* eslint-enable */
          {item.value}
        </ListItem>
      )}
    </List>
  </Menu>
);

FilterMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selectedItem: PropTypes.object.isRequired,
};

export default cssModules(FilterMenu, styles);
