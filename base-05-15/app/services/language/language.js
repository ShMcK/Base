class LanguageService {
  constructor() {
    this.languages = require('./languages.json');
    this.selected = this.languages[0];
  }
}

export default angular.module('app.language', [])
  .service('LanguageService', LanguageService)
  .directive('languageSelect', require('./languageSelect'));