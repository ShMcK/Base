/*jshint browser:true */
'use strict';

/**
 * Bootstraps the app. (ng-app alternative)
 */

// Load vendor files
require('./vendor')();
// App
var appModule = require('index');

// refactor config to use component router
//require('./config/config')(appModule);
//require('./config/config.rest')(appModule); // restangular
//require('./values')(appModule);

//if (MODE.production) { // jshint ignore:line
//  require('./config/config.prod')(appModule);
//}
//if (MODE.test) { // jshint ignore:line
//  require('./config/config.test')(appModule);
//}

// Bootstrap the app
angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});