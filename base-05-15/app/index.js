'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',
  'ngAnimate',
  'ngSanitize',
  'ngTouch',
  'ngCookies',

  /* services */
  require('./services/identity/identity').name,
  require('./services/translate/translate').name,

  /* components */
  require('./core/layout/layout').name,
  require('./components/product-list/productList')

])
  .directive('app', require('./components/app/app'));

