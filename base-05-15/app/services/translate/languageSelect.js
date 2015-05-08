class LanguageSelectCtrl {
  constructor(TranslateService, $scope, $translate) {
    this.Translate = TranslateService;
    $scope.$watch('language.Translate.selected', () => {
      $translate.use(this.Translate.selected);
    });
  }
}
LanguageSelectCtrl.$inject = ['TranslateService', '$scope', '$translate'];

/**
 * Language Selector
 * @returns {{template: (*|any), controllerAs: string, controller: Function}}
 */
export default () => {
  return {
    template: require('./language-select.html'),
    controllerAs: 'language',
    controller: LanguageSelectCtrl
  };
};