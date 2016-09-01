import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { Link } from 'react-router';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Footer from 'grommet/components/Footer';

const NotFound = () => (
  <div className={styles.container}>
    <Section className={styles.putInMiddle}>
      <Heading align="center" tag="h1">
        Page Not Found
      </Heading>
      <Article>
        <Heading align="center" tag="h3" className={styles.sectionHeader}>
          We're sorry, but there was nothing we could do. 😳
        </Heading>
        <Footer className={styles.footerCenter}>
          <Link to="/">
            <Button
              a11yTitle="Back to Home Button"
              onClick={(x) => x} // eslint-disable-line react/jsx-no-bind
            >
              Take Me Home 🏠
            </Button>
          </Link>
        </Footer>
      </Article>
    </Section>
  </div>
);

export default cssModules(NotFound, styles);
