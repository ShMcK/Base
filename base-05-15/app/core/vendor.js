export default () => {
  /**
   *  Styles
   */
  require('../index.scss');
  /**
   *  JS
   */
  global.$ = global.jQuery = require('jquery'); // drop if possible
  require('angular');
  require('angular-animate');
  require('angular-touch');
  require('angular-sanitize');
  require('angular-new-router');

  //require('lodash');
  //require('restangular');
  //require('angular-translate');
};
