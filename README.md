![Restaurant Reviewer](https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/main.jpg?raw=true)


## Restaurant Reviewer

A proof of concept restaurant review application built with a focus on accessibility. 

Accesses JSON served from a [Ruby on Rails API](https://github.com/RyanCCollins/restaurant-reviewer-api) containing restaurant information (including name, a photograph, address, cuisine type and operating hours) as well as JSON containing review information for each restaurant (name of reviewer, date of review, 5-star rating and comments). Includes an application header, and a menu providing multiple ways to filter the restaurants (by cuisine, by location, etc). When viewing a specific restaurant, current reviews are displayed along with a form for the user to submit their own review.

## UX & Accessibility Features
This app integrates [grommet](https://github.com/grommet/grommet), the world's most advanced UX framework.  It implements many accessibility best practices, including the usage of skip links, proper focus handling, aria attributes, and many others.  

### Getting Started
The application requires npm v3.8.8 and node v4.2.4.  Errors may occur if you are using other versions.  For details on setting node and npm permissions and using node version manager to install specific node versions, please see [this gist](https://gist.github.com/RyanCCollins/69443f0ff1f7725d305d).

### Installing

To install the dependencies, run
```
npm run setup
```

In order for the app to be built, it needs the following packages installed globally:
```
npm run install-globals
```

These can be installed with one of the npm scripts: `npm run install-globals`

To get the app running after install, run:
```
npm run start
```

The project will be served from: `http://0.0.0.0:1337/`

## Serve production bundle.js

Included in the repo is a pre-built bundle.js, which is located within the /server directory.  To serve the bundle without running a build process, please run:
```
npm run serve:bundle
```

and browse the served bundle at: `http://0.0.0.0:1337`

The project uses the [Scalable React Boilerplate Project](https://github.com/RyanCCollins/scalable-react-boilerplate), so please reference it for more useful scripts.

## Built With
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/docs/introduction/)
- [Grommet](http://grommet.io)
- [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Authors
* **Ryan Collins**

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Troubleshooting
If you run into troubles installing the app's dependencies, you should ensure that you are using the following NPM and Node versions.
```
  "node": "4.2.4",
  "npm": "3.8.8"
```

[NVM](https://github.com/creationix/nvm) can be used to change your NodeJS version.

## Screen Shots
![Main Page](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/mainpage.png?raw=true)
![Single Restaurant](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/singlerestaurantmain.png?raw=true)
![Reviews](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/reviews.png?raw=true)
