define(['bonusRoute',
	'bonusRun',
	'bonusController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var bonus = angular.module('bonus', [])
			.config(route)
			.run(run)
			.controller('bonusCtrl', indexCtrl);
});
