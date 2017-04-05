define(['missionsRoute',
	'missionsRun',
	'missionsController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var missions = angular.module('missions', [])
			.config(route)
			.run(run)
			.controller('missionsCtrl', indexCtrl);
});
