import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
import Hero from 'grommet/components/hero';
import Heading from 'grommet/components/heading';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';
import Markdown from 'grommet/components/Markdown';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

const AboutInfo = () => (
  <div className={styles.aboutInfo}>
    <Hero
      backgroundType="image"
      justify="center"
    >
      <Heading tag="h1" align="center" style={styles.paddedHeader}>
        Restaurant Reviewer
      </Heading>
    </Hero>
    <Section pad={{ vertical: 'large', horizontal: 'large' }}>
      <Article>
        <Section pad={{ vertical: 'large' }}>
          <Box
            align="center"
            alignContent="center"
            focusable="false"
            justify="center"
            pad={{ vertical: 'large', horizontal: 'large' }}
          >
            <Image
              full="horizontal"
              className={styles.boogie}
              alt="Pouring water in a glass"
              src="https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/mainhighres.jpg?raw=true"
            />
          </Box>
          <Box
            align="center"
            alignContent="center"
            focusable="false"
            justify="center"
            pad={{ vertical: 'large' }}
            colorIndex="light-1"
          >
            <Card
              label="About the App"
              heading="Restaurant Reviewer, UX App"
              description={
                <Markdown
                  content="
                  A restaurant review application, built
                   with a focus on UX and A11y best practices. <br />

                  The App was built to showcase both
                   the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) and [Grommet UX](https://grommet.io).  <br />

                  Please feel free to view the
                  [source code](https://github.com/RyanCCollins/restaurant-reviewer)
                  , leave a review, clone the app, or anything else! <br />
                  "
                />
              }
            />
          </Box>
        </Section>
        <hr />
        <Section pad={{ vertical: 'large', horizontal: 'large' }}>
          <Heading align="center" tag="h2">
            Made With These Great Technologies
          </Heading>
          <span style={{ marginBottom: 80 }} />
          <Tiles justify="center" full="horizontal">
            <Tile align="start">
              <Image
                alt="React Logo"
                src="http://coenraets.org/present/react/img/react.png"
              />
            </Tile>
            <Tile align="start">
              <Image
                alt="Redux Logo"
                src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
              />
            </Tile>
            <Tile align="start">
              <Image
                alt="Grommet Logo"
                src="https://camo.githubusercontent.com/17515422f0b959746bb2dcaf02533e7e00bac225/68747470733a2f2f67726f6d6d65742e6769746875622e696f2f696d672f67726f6d6d65742e737667"
              />
            </Tile>
            <Tile align="start">
              <Image
                alt="Scalable React Boilerplate"
                src="https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/scalable-react-boilerplate.png?raw=true"
              />
            </Tile>
          </Tiles>
        </Section>
        <Section pad={{ vertical: 'large', horizontal: 'large' }}>
          <Heading align="center" tag="h2">
            About the Developer
          </Heading>
          <Box
            align="center"
            alignContent="center"
            focusable="false"
            justify="center"
            pad={{ vertical: 'large' }}
            colorIndex="light-1"
          >
            <img
              src="https://github.com/RyanCCollins/cdn/blob/master/misc/ryanc.jpg?raw=true"
              alt="Ryan Collins, Full Stack Developer"
              className={styles.avatar}
            />
            <Box
              align="center"
              alignContent="center"
              focusable="false"
              justify="center"
              pad={{ vertical: 'large', horizontal: 'large' }}
              colorIndex="light-1"
            >
              <Heading tag="h2" align="center">
                Ryan Collins
              </Heading>
              <Heading tag="h3" align="center">
                Web Techologist, Full Stack Engineer
              </Heading>
              <Heading tag="h5" align="center">
                Experienced engineer specializing in implementing
                cutting-edge technologies
                <br />
                in a multitude of domains,
                including Front End web, UI / UX, et. al.
              </Heading>
            </Box>
          </Box>
        </Section>
        <Footer>
          <Box
            pad="medium"
            align="center"
            justify="center"
            focusable={false}
            style={{ minHeight: 200 }}
            full="horizontal"
          >
            <Link to="/">
              <Button
                onClick={(a) => a} // eslint-disable-line react/jsx-no-bind
                a11yTitle="Go Home"
              >
                Take me home
              </Button>
            </Link>
          </Box>
        </Footer>
      </Article>
    </Section>
  </div>
);

export default cssModules(AboutInfo, styles);
