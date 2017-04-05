define(['contestsRoute',
	'contestsRun',
	'contestsController',
	'contestDrawTable',
	'filters'
	],
	(route, run, indexCtrl) => {
		'use strict';
		
		var contests = angular.module('contests', [])
			.config(route)
			.run(run)
			.controller('contestsCtrl', indexCtrl);
});
