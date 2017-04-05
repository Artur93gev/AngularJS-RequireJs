define([], () => {
	'use strict';

	var route = ($stateProvider) => {
		$stateProvider
			.state('bonusModule', {
				url 		: 'bonus',
				templateUrl : 'app/apps/bonus/view/index.html',
				controller	: 'bonusCtrl',
			});
	}

	route.$inject = ['$stateProvider'];

	return route;
})