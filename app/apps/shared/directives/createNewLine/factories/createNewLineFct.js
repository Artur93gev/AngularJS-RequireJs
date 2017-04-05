define(['createNewLineSource'
	], (createNewLineSource) => {
	'use strict';

	angular.module('shared').factory('CreateNewLine', [
		() => {
			return createNewLineSource;
	}]);
});
