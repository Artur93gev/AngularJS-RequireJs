define([], () => {
	'use strict';

	let Radiobuttons = function(options) {
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
					throw new Error('passed options must be object and have list, listName and criterion properties');
				}
				let checked;
				this.control = (e, item) => {
					if (e) {
						e.stopPropagation();
					}
					if (item) {
						for (let i = 0; i < this.itemList.list.length; i++) {
							this.itemList.list[i].model = false;
						}
						item.model = true;
						checked = item[criterion];
					} else {
						for (let i = 0; i < this.itemList.list.length; i++) {
							if (this.itemList.list[i].model) {
								checked = this.itemList.list[i][criterion];
							}
						}
					}
				};
				this.control();
				this.getResult = (flag) => {
					if (flag) {
						console.log(JSON.parse(_list))
						this.itemList.list = JSON.parse(_list);
						this.control();
					}
					return checked;
				}
			} else {
				throw new Error('the argument passed must be of object type, not ' + typeof(options));
			}
		} else {
			throw new Error('Radiobuttons cannot be initialized without arguments');
		}
	}

	return Radiobuttons;
});
