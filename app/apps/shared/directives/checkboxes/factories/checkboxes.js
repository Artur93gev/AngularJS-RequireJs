define(['checkboxesSource'
	], (checkboxesSource) => {
	'use strict';

	angular.module('shared').factory('Checkboxes', [
		() => {
			return checkboxesSource;
	}]);
});
