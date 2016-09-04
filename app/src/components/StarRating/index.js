import React, { PropTypes } from 'react';
import ReactStars from 'react-stars';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const StarRating = ({
  value,
  label,
  editable,
  onEdit,
}) => (
  <div className={styles.starRating}>
    <ReactStars
      name={label}
      role="presentation"
      count={5}
      onChange={editable ? onEdit : null}
      half={false}
      edit={editable}
      value={value}
      color2={'#8C50FF'}
      color1={'rgb(0, 0, 0)'}
      size={30}
    />
  </div>
);

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  onEdit: PropTypes.func,
};

export default cssModules(StarRating, styles);
