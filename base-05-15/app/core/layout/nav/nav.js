const name = 'navbar';

function navbar() {
  return {
    template: require('./nav.html'),
    controllerAs: 'nav',
    controller: function () {
      var data = require('index.json');
      this.title = data.title;
      this.primaryNav = data.nav.primary;
      this.secondaryNav = data.nav.secondary;
    }
  };
}

export default angular.module(`app.${name}`, [])
  .directive(name, navbar);