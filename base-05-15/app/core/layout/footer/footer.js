export default () => {
  return {
    template: require('./footer.html'),
    controllerAs: 'footer',
    controller: function () {
      this.data = require('index.json').footer;
    }
  };
};