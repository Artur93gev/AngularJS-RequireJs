define(['filtersSource'
	], (filtersSource) => {
		'use strict';

		angular.module('shared').factory('FiltersFct',
			() => {
				return filtersSource;
		});
});
