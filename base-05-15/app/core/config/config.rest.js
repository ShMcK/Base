export default appModule => {
  appModule.config((RestangularProvider) => {
    RestangularProvider.setBaseUrl(
      'http://...'
    );
  });
};