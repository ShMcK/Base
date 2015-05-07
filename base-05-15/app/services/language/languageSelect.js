export default () => {
  return {
    template: require('./language.html'),
    controllerAs: 'language',
    controller: function (LanguageService) {
      angular.extend(this, {
        languages: LanguageService.languages,
        selected: LanguageService.selected
      });
    }
  };
};