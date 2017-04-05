define(['headersControlSource'
	], (headersControlSource) => {
		'use strict';

		angular.module('shared').factory('HeadersControlFct', [
			() => {
				return headersControlSource;
		}]);
});
