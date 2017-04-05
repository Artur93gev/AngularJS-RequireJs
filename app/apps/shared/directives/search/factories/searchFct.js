define(['searchSource'
	], (searchSource) => {
		'use strict';

		angular.module('shared').factory('SearchFct', [
			() => {
				return searchSource;
		}]);
});
