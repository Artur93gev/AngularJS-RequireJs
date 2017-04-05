define(['leaguesRoute',
	'leaguesRun',
	'leaguesController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var leagues = angular.module('leagues', [])
			.config(route)
			.run(run)
			.controller('leaguesCtrl', indexCtrl);
});
