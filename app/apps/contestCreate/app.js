define(['contestCreateRoute',
	'contestCreateRun',
	'contestCreateController',
	'contestCreateImageUpload',
	'contestCreateFactory',
	'checkboxSrv'
	],
	(route, run, indexCtrl, imageUpload) => {
		'use strict';

		let contestCreate = angular.module('contestCreate', [])
			.config(route)
			.run(run)
			.controller('contestCreateCtrl', indexCtrl)
			.directive('imageUpload', imageUpload);
});
