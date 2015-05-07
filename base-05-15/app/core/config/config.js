export default appModule => {
  appModule.config(($locationProvider, $urlRouterProvider, $provide) => {
    // overwrite the default behaviour for $uiViewScroll service (scroll to top of the page)
    $provide.decorator('$uiViewScroll', ['$delegate', '$window', function ($delegate, $window) {
      return function () {
        $window.scrollTo(0, 0);
      };
    }]);

    $urlRouterProvider.otherwise('/'); // or 404
    //$locationProvider.html5Mode(true); // removes # from url
    //$urlRouterProvider.when('/', '/main'); // route to different url root
  });
};
