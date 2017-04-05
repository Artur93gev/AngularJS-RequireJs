define(['loyalityRoute',
	'loyalityRun',
	'loyalityController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var loyality = angular.module('loyality', [])
			.config(route)
			.run(run)
			.controller('loyalityCtrl', indexCtrl);
});
