define(['intervalsSource'
	], (intervalsSource) => {
		'use strict';

		angular.module('shared').factory('IntervalsFct', [
			() => {
				return intervalsSource;
		}]);
});
