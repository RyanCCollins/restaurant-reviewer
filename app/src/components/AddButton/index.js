import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Add from 'grommet/components/icons/base/Add';
import Button from 'grommet/components/button';

const AddButton = ({
  onAdd,
}) => (
  <Button
    className={styles.addButton}
    icon={
      <Add className={styles.icon} />
    }
    onClick={onAdd}
    a11yTitle="Add Review Button"
  />
);

AddButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default cssModules(AddButton, styles);
