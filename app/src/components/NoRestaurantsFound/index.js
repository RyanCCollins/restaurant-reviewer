import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/paragraph';
import Section from 'grommet/components/section';
import { CodeBlock } from 'components';

const NoRestaurantsFound = ({
  filter,
}) => (
  <Section style={styles.centerAndPad}>
    <Heading
      strong
      align="center"
      tag="h2"
      className={styles.paragraphCenter}
    >
      No Restaurants Found
    </Heading>
    <Paragraph size="large" className={styles.paragraphCenter}>
      Sorry, but the set filter did not return any results.
    </Paragraph>
    <CodeBlock
      codeBlock={
        `
        Category Filter: ${filter.categoryFilter} \n
        Location Filter: ${filter.locationFilter} \n
        Rating Filter: ${filter.ratingFilter}
        `
      }
    />
  </Section>
);

NoRestaurantsFound.propTypes = {
  filter: PropTypes.object,
};

export default cssModules(NoRestaurantsFound, styles);
