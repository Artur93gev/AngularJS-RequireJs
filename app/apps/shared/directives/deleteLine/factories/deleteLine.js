define(['deleteLineSource'
	], (deleteLineSource) => {
		'use strict';

		angular.module('shared').factory('DeleteLineFct',
			() => {
				return deleteLineSource;
		});
});
