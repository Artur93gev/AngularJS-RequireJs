define([], () => {
	'use strict';

	let Intervals = function(options) {
		if (options) {
			if (typeof options === 'object') {
				if (options.hasOwnProperty('minValue') && options.hasOwnProperty('maxValue') && options.intervalsName) {
					let min, max;
					this.min = min = options.minValue;
					this.max = max = options.maxValue;
					this.name = options.intervalsName;
					this.minValueChange = (item) => {
						if (item >= min && item <= max) {
							this.min = item;
						} else {
							this.min = min;
						}
					}
					this.maxValueChange = (item) => {
						if (item >= min && item <= max) {
							this.max = item;
						} else {
							this.max = max;
						}
					}
					this.getResult = (flag) => {
						if (flag) {
							this.min = options.minValue;
							this.max = options.maxValue;
						}
						return {
							min : this.min,
							max : this.max
						}
					}
				} else {
					throw new Error('the options passed must have minValue, maxValue and intervalsName properties');
				}
			} else {
				throw new Error('the argument passed must be of object type, not ' + typeof(options));
			}
		} else {
			throw new Error('Intervals cannot be initialized without arguments');
		}
	}

	return Intervals;
});
