/**
 * Footer using Bourbon refills
 * @returns {{template: (*|any), controllerAs: string, controller: Function}}
 */
export default () => {
  return {
    template: require('./footer.html'),
    controllerAs: 'footer',
    controller: function () {
      var data = require('index.json').footer;
      angular.extend(this, {
        logo: data.logo,
        primary: require('index.json').nav.primary,
        secondary: data.secondary,
        social: data.social
      });
    }
  };
};