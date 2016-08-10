import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Notification from 'grommet/components/notification';
import CloseIcon from 'grommet/components/icons/base/Close';
import Button from 'grommet/components/button';

const ErrorAlert = ({
  errors,
  onClose,
}) => (
  <div className={styles.errorAlert}>
    {errors.length > 0 && errors.map((error, i) =>
      <div key={i} className={styles.error}>
        <div className="error-alert__closer">
          <Button
            plain
            onClick={onClose}
            className={styles.closeButton}
          >
            <CloseIcon a11yTitle="Close Alert" />
          </Button>
        </div>
        <Notification
          style={{ paddingTop: 10 }}
          status="critical"
          size="large"
          message={error.message}
          state="Active"
        />
      </div>
    )
    }
  </div>
);

ErrorAlert.propTypes = {
  errors: PropTypes.array,
  onClose: PropTypes.func.isRequired,
};

export default cssModules(ErrorAlert, styles);
