define(['tableSource'
	], (tableSource) => {
		'use strict';

		angular.module('shared').factory('TableFct',
			() => {
				return tableSource;
		});
});
