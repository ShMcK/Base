export default () => {
  return {
    template: require('./footer.html'),
    controllerAs: 'footer',
    controller: function () {
      var data = require('index.json').footer;
      angular.extend(this, {
        logo: data.logo,
        primary: data.primary,
        secondary: data.secondary,
        social: data.social
      });
    }
  };
};