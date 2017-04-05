define(['athletesRoute',
	'athletesRun',
	'athletesController'
	],
	(route, run, indexCtrl) => {
		'use strict';

		var athletes = angular.module('athletes', [])
			.config(route)
			.run(run)
			.controller('athletesCtrl', indexCtrl);
});
