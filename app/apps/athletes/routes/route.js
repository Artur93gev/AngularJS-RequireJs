define([], () => {
	'use strict';

	var route = ($stateProvider) => {
		$stateProvider
			.state('athletesModule', {
				url 		: 'athletes',
				templateUrl : 'app/apps/athletes/view/index.html',
				controller	: 'athletesCtrl',
			});
	}

	route.$inject = ['$stateProvider'];

	return route;
});
