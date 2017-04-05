define(['challangesRoute',
	'challangesRun',
	'challangesController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var challanges = angular.module('challanges', [])
			.config(route)
			.run(run)
			.controller('challangesCtrl', indexCtrl);
});
