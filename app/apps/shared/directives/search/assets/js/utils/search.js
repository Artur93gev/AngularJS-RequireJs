define([], () => {
	'use strict';

	let Search = function(options) {
		if (options) {
			if (typeof options === 'object') {
				if (options.hasOwnProperty('isLiveUpdated') && options.list && options.searchName && options.criterion) {
					this.name = options.searchName;
					let list, str;
					this.change = (str) => {
						if (options.isLiveUpdated) {
							list = [];
							for (let i = 0; i < options.list.length; i++) {
								if (options.list[i][options.criterion].search(str) != -1) {
									list.push(options.list[i]);
								}
							}
						} else {
							str = str;
						}
					}
					this.getResult = (flag) => {
						if (flag) {
							list = [];
							str = '';
						}
						return options.isLiveUpdated ? list : str;
					}
				} else {
					throw new Error('argument passed to Search constructor must have "isLiveUpdated", "list", "searchName" and "criterion" properties');
				}
			} else {
				throw new Error('the argument passed must be of object type, not ' + typeof(options));
			}
		} else {
			throw new Error('Search cannot be initialized without arguments');
		}
	}

	return Search;
});
