define([], () => {
	'use strict';

	var route = ($stateProvider) => {
		$stateProvider
			.state('bankModule', {
				url 		: 'bank',
				templateUrl	: 'app/apps/bank/view/index.html',
				controller 	: 'bankCtrl'
			});
	}

	route.$inject = ['$stateProvider'];

	return route;
});
