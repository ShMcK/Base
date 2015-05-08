/**
 * Hero Unit using Bourbon refills
 * @returns {{template: (*|any), controllerAs: string, controller: Function}}
 */
export default () => {
  return {
    template: require('./hero.html'),
    controllerAs: 'hero',
    controller: function () {
      this.hero = require('index.json').hero;
    }
  };
};