define([], () => {
	'use strict';

	var route = ($stateProvider) => {
		$stateProvider
			.state('challangesModule', {
				url 		: 'challanges',
				templateUrl : 'app/apps/challanges/view/index.html',
				controller 	: 'challangesCtrl',
			});
	}

	route.$inject = ['$stateProvider'];

	return route;
});
