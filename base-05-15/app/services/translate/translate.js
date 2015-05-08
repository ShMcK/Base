class TranslateService {
  constructor($translate) {
    this.$translate = $translate;
    this.languages = require('./languages.json');
    this.selected = this.languages[0];
  }
  changeLanguage(key) {
    this.$translate.use(key);
  }
}
TranslateService.$inject = ['$translate'];

export default angular.module('app.translate', [
  'pascalprecht.translate'
])
  .service('TranslateService', TranslateService)
  .directive('languageSelect', require('./languageSelect'))
  .value('language', 'en')
  .config(require('./translate.config'));