'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',
  'ngAnimate',
  'ngSanitize',
  'ngTouch',
  //'restangular',
  //'pascalprecht.translate'

  /* services */

  /* components */
  require('./core/layout/layout').name

  /* states */

])
  .directive('app', require('./components/app/app'));

