define([], () => {
	'use strict';

	let Checkbox = function(options) {
		if (options) {
			if (typeof options === 'object') {
				this.itemList = {};
				let _list = JSON.stringify(options.list);
				let criterion = options.criterion;
				if (options.listName && options.list && options.criterion) {
					this.itemList = {
						name : options.listName,
						list : options.list
					};
				} else {
					throw new Error('each item of checkboxes must be object and have list, listName and criterion properties');
				}
				let checked = [];
				this.control = (e, item) => {
					if (e) {
						e.stopPropagation();
					}
					if (item) {
						item.model = !item.model;
					}
					check();
				};
				let check = () => {
					checked = [];
					for (let i = 0; i < this.itemList.list.length; i++) {
						if (this.itemList.list[i].model) {
							checked.push(this.itemList.list[i][criterion]);
						}
					}
				}
				this.getResult = (flag) => {
					if (flag) {
						this.itemList.list = JSON.parse(_list);
						check();
					}
					return checked;
				}

				this.control();
			} else {
				throw new Error('the argument passed must be of object type, not ' + typeof(options));
			}
		} else {
			throw new Error('Checkboxes cannot be initialized without arguments');
		}
	}

	return Checkbox;
});
