/**
 * App root & Routes
 * @returns {{restrict: string, template: (*|any), controller: Function}}
 */
export default () => {
  return {
    restrict: 'E',
    template: require('./app.html'),
    controller: function ($router) {
      $router.config(require('routes.json'));
    }
  };
};