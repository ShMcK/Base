/**
 * Bullets using Bourbon refills
 * @returns {{template: (*|any), controllerAs: string, controller: Function}}
 */
export default () => {
  return {
    template: require('./bullets.html'),
    controllerAs: 'bullets',
    controller: function () {
      angular.extend(this, {
        bullets: require('index.json').bullets
      });
    }
  };
};