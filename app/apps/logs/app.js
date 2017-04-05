define(['logsRoute',
	'logsRun',
	'logsController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var logs = angular.module('logs', [])
			.config(route)
			.run(run)
			.controller('logsCtrl', indexCtrl);
});
