define([], () => {
	'use strict';

	var route = ($stateProvider) => {
		$stateProvider
			.state('cloudModule', {
				url 		: 'cloud',
				templateUrl	: 'app/apps/cloud/view/index.html'
				controller 	: 'cloudCtrl',
			});
	}

	route.$inject = ['$stateProvider'];

	return route;
});
