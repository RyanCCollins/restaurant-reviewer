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
Then run
```
npm run start
```

The project uses the [Scalable React Boilerplate Project](https://github.com/RyanCCollins/scalable-react-boilerplate), so please reference it for more useful scripts.

## Built With
React, Redux
## Authors
* **Ryan Collins**

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
