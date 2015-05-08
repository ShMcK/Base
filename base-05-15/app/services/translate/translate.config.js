export default ($translateProvider) => {
  $translateProvider.preferredLanguage('en');
  // English
  $translateProvider.translations('en', require('languages/en.app.json'));
  // Korean
  //$translateProvider.translations('ko', require('languages/ko.app.json'));
  // Chinese
  //$translateProvider.translations('ch', require('languages/ch.app.json'));
};