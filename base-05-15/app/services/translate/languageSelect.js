/**
 * Language Selector
 * @returns {{template: (*|any), controllerAs: string, controller: Function}}
 */
export default () => {
  return {
    template: require('./language-select.html'),
    controllerAs: 'language',
    controller: function (TranslateService) {
      angular.extend(this, {
        languages: TranslateService.languages,
        selected: TranslateService.selected
      });
    }
  };
};