import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Header from 'grommet/components/header';
import Paragraph from 'grommet/components/paragraph';
import Section from 'grommet/components/section';

const NoRestaurantsFound = ({
  filter,
}) => (
  <Section style={styles.centerAndPad}>
    <Header justify="center" tag="h4">
      No Restaurants Found
    </Header>
    {typeof filter !== undefined &&
      <Paragraph>
        Sorry, but {filter} did not return any results.
      </Paragraph>
    }
  </Section>
);

NoRestaurantsFound.propTypes = {
  filter: PropTypes.string,
};

export default cssModules(NoRestaurantsFound, styles);
