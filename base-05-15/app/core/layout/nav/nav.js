/**
 * Navbar using Bourbon Refills
 * @returns {{template: (*|any), controllerAs: string, controller: Function}}
 */
export default () => {
  return {
    template: require('./nav.html'),
    controllerAs: 'navbar',
    controller: function () {
      var data = require(`index.json`);
      angular.extend(this, {
        title: data.title,
        nav: data.nav
      });

      // bourbon refill nav
      // rewrite for angular
      $(document).ready(function() {
        var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
        $('#js-centered-navigation-menu').removeClass('show');

        menuToggle.on('click', function(e) {
          e.preventDefault();
          $('#js-centered-navigation-menu').slideToggle(function(){
            if($('#js-centered-navigation-menu').is(':hidden')) {
              $('#js-centered-navigation-menu').removeAttr('style');
            }
          });
        });
      });


    }
  };
};