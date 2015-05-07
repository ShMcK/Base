require('angular-mocks');

export default (appModule) => {
	appModule.config(($provide) => {
		'ngInject';
		$provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
	});

	appModule.run(($httpBackend) => {
		'ngInject';
		$httpBackend.whenGET(/^\w+.*/).passThrough();
		$httpBackend.whenPOST(/^\w+.*/).passThrough();
	});
};