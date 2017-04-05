define([], () => {
	'use strict';

	var route = ($stateProvider) => {
		$stateProvider
			.state('contestCreateModule', {
				url 		: 'contestCreate',
				templateUrl : 'app/apps/contestCreate/view/index.html',
				controller 	: 'contestCreateCtrl'
			});
	}

	route.$inject = ['$stateProvider'];

	return route;
});
