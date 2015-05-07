require('angular-mocks');

export default (ngModule) => {
	ngModule.config(($provide) => {
		'ngInject';
		$provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
	});

	ngModule.run(($httpBackend) => {
		'ngInject';
		$httpBackend.whenGET(/^\w+.*/).passThrough();
		$httpBackend.whenPOST(/^\w+.*/).passThrough();
	});
};