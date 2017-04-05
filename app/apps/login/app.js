define(['loginRoute',
	'loginRun',
	'loginController',
	],
	function(route, run, indexCtrl) {
		'use strict';

		var login = angular.module('login', [])
			.config(route)
			.run(run)
			.controller('loginCtrl', indexCtrl);
});
