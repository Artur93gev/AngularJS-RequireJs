define([], () => {
	'use strict';

	let Table = function(options) {
		if (options) {
			if (typeof options === 'object') {
				
			} else {
				throw new Error('the argument passed must be of object type, not ' + typeof(options));
			}
		} else {
			throw new Error('Search cannot be initialized without arguments');
		}
	}

	return Table;
});
