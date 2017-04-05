define(['tableController'
	], (tableController) => {
		'use strict';

		angular.module('shared').directive('tableDir', tableController);
});
