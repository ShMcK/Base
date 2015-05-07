export default ngModule => {
  ngModule.config((RestangularProvider) => {
    RestangularProvider.setBaseUrl(
      'http://...'
    );
  });
};