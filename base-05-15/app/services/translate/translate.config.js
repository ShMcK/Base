export default ($translateProvider) => {
  // English
  $translateProvider.translations('en', require('languages/app.en.json'));
  // Korean
  //$translateProvider.translations('ko', require('languages/app.ko.json'));
  // Chinese
  //$translateProvider.translations('ch', require('languages/app.ch.json'));
};