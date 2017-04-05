define(['filtersController',
	'checkboxesDir',
	'radiobuttonsDir',
	'search',
	'intervals'
	], (filtersController) => {
		'use strict';

		angular.module('shared').directive('filtersDir', filtersController);
});
