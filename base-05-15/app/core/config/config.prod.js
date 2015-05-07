export default (ngModule) => {
	ngModule.config(($compileProvider, $httpProvider) => {
		$compileProvider.debugInfoEnabled(false);
		$httpProvider.useApplyAsync(true);
	});
};
