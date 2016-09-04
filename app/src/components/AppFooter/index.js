import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import SocialShare from 'grommet/components/SocialShare';
import Menu from 'grommet/components/Menu';

const AppFooter = () => (
  <Footer className={styles.appFooter}>
    <Box direction="column" align="center" pad="none" responsive className={styles.flexOne}>
      <Heading tag="h3">
        By{' '}
        <a
          className={styles.footerAnchor}
          href="https://www.ryancollins.io"
        >
          Ryan Collins
        </a>
      </Heading>
      <Heading tag="h5">
        Showcasing the{' '}
        <a
          className={styles.footerAnchor}
          href="https://github.com/RyanCCollins/scalable-react-boilerplate"
        >
          Scalable React Boilerplate
        </a>
        {' '}and{' '}
        <a
          className={styles.footerAnchor}
          href="https://grommet.io"
        >
          Grommet UX
        </a>
      </Heading>
      <Heading tag="h5">
        This app is licensed under the{' '}
        <a
          className={styles.footerAnchor}
          href="https://github.com/RyanCCollins/restaurant-reviewer/blob/master/LICENSE"
        >
          MIT License.
        </a>
        {' '}Take a peak at the{' '}
        <a
          className={styles.footerAnchor}
          href="https://github.com/RyanCCollins/restaurant-reviewer"
        >
          source code.
        </a>
      </Heading>
      <Menu direction="row">
        <SocialShare
          a11yTitle="Navigate to Facebook to Share this website"
          type="facebook"
          link="http://restaurant-reviewer-client.herokuapp.com"
          text="A11y Restaurant Reviewer App"
        />
        <SocialShare
          a11yTitle="Navigate to Twitter to Share this website"
          type="twitter"
          link="http://restaurant-reviewer-client.herokuapp.com"
          text="A11y Restaurant Reviewer App"
        />
        <SocialShare
          a11yTitle="Navigate to Linkedin to Share this website"
          type="linkedin"
          link="http://restaurant-reviewer-client.herokuapp.com"
          title="Restaurant Reviewer"
          text="A11y Restaurant Reviewer App"
        />
      </Menu>
    </Box>
  </Footer>
);

AppFooter.propTypes = {

};

export default cssModules(AppFooter, styles);
