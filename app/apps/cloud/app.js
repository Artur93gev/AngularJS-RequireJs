define(['cloudRoute',
	'cloudeRun',
	'cloudController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var cloud = angular.module('cloud', [])
			.config(route)
			.run(run)
			.controller('cloudCtrl', indexCtrl);
});
