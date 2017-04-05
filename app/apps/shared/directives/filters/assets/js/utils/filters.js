define([], () => {
	'use strict';

	let Filters = function(options) {
		if (options) {
			if (typeof options === 'object') {
				if (options.title && options.searchName && options.resetName && options.fn) {
					let arr;
					this.title = options.title;
					this.searchName = options.searchName;
					this.resetName = options.resetName;
					
					this.search = (e) => {
						if (e) {
							e.stopPropagation();
						}
						arr = {};
						for (let key in options) {
							if (Array.isArray(options[key])) {
								for (let i = 0; i < options[key].length; i++) {
									if (options[key][i].fn) {
										arr[key] = options[key][i].fn();
									}
								}
							}
						}
						options.fn(arr);
					}
					this.reset = (e) => {
						if (e) {
							e.stopPropagation();
						}
						arr = {};
						for (let key in options) {
							if (Array.isArray(options[key])) {
								for (let i = 0; i < options[key].length; i++) {
									if (options[key][i].fn) {
										arr[options[key][i].options.listName] = options[key][i].fn(true);
									}
								}
							}
						}
						options.fn(arr);
					}
				} else {
					throw new Error('options passed must have title, fn, searchName and resetName');
				}
			} else {
				throw new Error('the argument passed must be of function type, not ' + typeof(options));
			}
		} else {
			throw new Error('Filters cannot be initialized without arguments');
		}
	}

	return Filters;
});
