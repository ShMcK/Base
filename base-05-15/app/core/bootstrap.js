/*jshint browser:true */
'use strict';
require('./vendor')();
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

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});