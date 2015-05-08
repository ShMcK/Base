export default () => {
  return {
    template: require('./footer.html'),
    controllerAs: 'footer',
    controller: function () {
      var data = require('index.json').footer;
      angular.extend(this, {
        logo: data.logo,
        primary: require('index.json').nav,
        secondary: data.secondary,
        social: data.social
      });
    }
  };
};