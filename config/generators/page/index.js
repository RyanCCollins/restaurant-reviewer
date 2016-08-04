/**
 * Page Generator
 */
const componentNameCheck = require('../utils/componentNameCheck');
const trimTemplateFile = require('../utils/trimTemplateFile');

module.exports = {
  description: 'Add a page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the page component?',
      default: 'About',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentNameCheck(value) ?
            'That component already exists. Please choose another name for your page component.' : true;
        }
        return 'The name is required.';
      },
    }, {
      type: 'input',
      name: 'path',
      message: 'Enter the path of the page component.',
      default: '/about',
      validate: value => {
        if ((/.+/).test(value)) {
          return true;
        }

        return 'path is required';
      },
    },
  ],


  actions: data => {
    // Generate index.js and index.module.scss
    const actions = [{
      type: 'add',
      path: '../../app/src/pages/{{properCase name}}Page/index.js',
      templateFile: './page/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/src/pages/{{properCase name}}Page/index.module.scss',
      templateFile: './page/index.module.scss.hbs',
      abortOnFail: true,
    }];

    // Add the route to the routes.js file above the error route
    // automatic export in root index.js
    // TODO smarter route adding
    actions.push({
      type: 'modify',
      path: '../../app/src/routes.js',
      pattern: /(<Route path="\*" component={Pages.NotFoundPage} \/>)/g,
      template: trimTemplateFile('config/generators/page/route.js.hbs'),
    }, {
      type: 'modify',
      path: '../../app/src/pages/index.js',
      pattern: /(\/\* Assemble all pages for export \*\/)/g,
      template: trimTemplateFile('config/generators/page/export.js.hbs'),
    });

    // README.md
    actions.push({
      type: 'add',
      path: '../../app/src/pages/{{properCase name}}Page/README.md',
      templateFile: './page/README.md.hbs',
      abortOnFail: true,
    });

    return actions;
  },
};
