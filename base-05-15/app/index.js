'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',
  'ngAnimate',
  'ngSanitize',
  'ngTouch',

  /* services */
  require('./services/identity/identity').name,
  require('./services/translate/translate').name,

  /* components */
  require('./core/layout/layout').name

])
  .directive('app', require('./components/app/app'));

