export default () => {
  /**
   *  Load Styles
   */
  require('../index.scss');
  /**
   *  Load JS
   */
  global.$ = global.jQuery = require('jquery'); // drop if possible
  require('angular');
  require('angular-animate');
  require('angular-touch');
  require('angular-sanitize');
  require('angular-cookies');
  require('angular-new-router');

};
