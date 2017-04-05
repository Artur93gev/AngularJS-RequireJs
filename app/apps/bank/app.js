define(['bankRoute',
	'bankRun',
	'bankController',
	'contestDrawTable'
	],
	(route, run,  indexCtrl) => {
		'use strict';

		var bank = angular.module('bank', [])
			.config(route)
			.run(run)
			.controller('bankCtrl', indexCtrl);
});
