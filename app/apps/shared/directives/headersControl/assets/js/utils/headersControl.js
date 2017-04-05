define([], () => {
	'use strict';

	let HeadersControl = function(options) {
		if (options) {
			if (typeof options === 'object') {
				if (options.list && options.criterion) {
					let	list = [],
						fn;
					if (options.fn) {
						fn = options.fn;
					}
					this.list = options.list;
					this.flag = false;
					this.control = (e) => {
						if (e) {
							e.stopPropagation();
						}
						this.flag = !this.flag;
					};
					let allow = () => {
						list = [];
						for (let i = 0; i < this.list.length; i++) {
							if(this.list[i].model) {
								list.push(this.list[i][options.criterion]);
							}
						}
						return (list.length != 1) ? true : false;
					}
					this.check = (e, item) => {
						let help = 0;
						if (e) {
							e.stopPropagation();
						}
						if (allow() || !item.model) {
							item.model = !item.model;
							help = (item.model) ? 1 : -1;
						}
						if (fn) {
							fn(list.length + help);
						}
					}
					this.getResult = () => {
						return list;
					}
					document.onclick = () => {
						this.flag = false;
					}
				} else {
					throw new Error('the options passed must have list and criterion proprtyies');
				}
			} else {
				throw new Error('the argument passed must be of object type, not ' + typeof(options));
			}
		} else {
			throw new Error('HeadersControl cannot be initialized without arguments');
		}
	}

	return HeadersControl;
});
