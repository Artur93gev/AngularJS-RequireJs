define([], () => {
	'use strict';

	let DeleteLine = function(options) {
		if (options) {
			if (typeof options === 'object') {
				if (options.name && options.fn && options.list && options.criterion) {
					this.name = options.name;
					this.action = (e) => {
						if (e) {
							e.stopPropagation();
						}
						options.fn(collect());
					}
					let collect = () {
						let arr = [];
						for (let i = 0; i < options.list.length; i++) {
							if (options.list[i].model) {
								arr.push(options.list[i][criterion]);
							}
						}
						return arr;
					};
				} else {
					throw new Error('passed options must have name, list and fn properties');
				}
			} else {
				throw new Error('the argument passed must be of function type, not ' + typeof(options));
			}
		} else {
			throw new Error('DeleteLine cannot be initialized without arguments');
		}
	}

	return DeleteLine;
});
