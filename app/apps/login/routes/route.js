define([], function() {
	'use strict';

	function route($stateProvider) {
		$stateProvider
			.state('loginModule', {
				url 		: 'login',
				templateUrl : 'app/apps/login/view/index.html',
				controller  : 'loginCtrl'
			});
	}

	route.$inject = ['$stateProvider'];

	return route;
});
