define([], () => {
	'use strict';

	let CreateNewLine = function(options) {
		if (options) {
			if (typeof options === 'function') {
				this.action = (e) => {
					if (e) {
						e.stopPropagation();
					}
					options();
				}
			} else {
				throw new Error('the argument passed must be of function type, not ' + typeof(options));
			}
		} else {
			throw new Error('Checkboxes cannot be initialized without arguments');
		}
	}

	return CreateNewLine;
});
