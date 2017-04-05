define(['usersRoute',
	'usersRun',
	'usersController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var users = angular.module('users', [])
			.config(route)
			.run(run)
			.controller('usersCtrl', indexCtrl);
});
