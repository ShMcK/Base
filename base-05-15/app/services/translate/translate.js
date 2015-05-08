/**
 * i18n translations using Angular-Translate
 */
require('angular-translate');
require('angular-translate-storage-cookie');
require('angular-translate-storage-local');

/**
 * Translate Service
 * - languages
 * - current selected language
 */
class TranslateService {
  constructor() {
    this.languages = require('./languages.json');
    this.selected = this.languages[0].code;
  }
}

export default angular.module('app.translate', [
  'pascalprecht.translate'
])
  .service('TranslateService', TranslateService)
  .directive('languageSelect', require('./languageSelect'))
  .value('language', 'en')
  .config(require('./translate.config'));