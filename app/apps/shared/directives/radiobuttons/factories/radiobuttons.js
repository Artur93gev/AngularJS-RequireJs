define(['radiobuttonsSource'
	], (radiobuttonsSource) => {
	'use strict';

	angular.module('shared').factory('Radiobuttons', [
		() => {
			return radiobuttonsSource;
	}]);
});