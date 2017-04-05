define(['accountsRoute',
	'accountsRun',
	'accountsController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var accounts = angular.module('accounts', [])
			.config(route)
			.run(run)
			.controller('accountsCtrl', indexCtrl);
});
