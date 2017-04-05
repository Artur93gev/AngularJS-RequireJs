define(['deleteLineController'
	], (deleteLineController) => {
		'use strict';

		angular.module('shared').directive('deleteLine', deleteLineController);
});