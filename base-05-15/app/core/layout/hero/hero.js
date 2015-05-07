export default () => {
  return {
    template: require('./hero.html'),
    controllerAs: 'hero',
    controller: function () {
      this.hero = require('index.json').hero;
    }
  };
};