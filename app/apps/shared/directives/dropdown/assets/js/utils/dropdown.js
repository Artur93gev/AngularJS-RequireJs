define([],
    () => {
        'use strict';

        let DropDown = function(options) {
            let _checkedCount,
                chosenItem = [],
                checkCount, checkAll, returnedArray;
            let _initialValues = {
                [options.itemValue]: -1,
                [options.itemName]: 'All',
                model: false
            };

            let predefineFunction = () => {
                if (options.multiSelected) {
                    if (options.itemsList.length > options.howManyItemsForAll) {
                        options.itemsList.unshift(_initialValues);
                    }
                    this.selecting(_initialValues);
                } else {
                    if (options.itemsList[0]) {
                        this.title =  options.itemsList[0][options.itemName];
                    }
                }
            };

            this.filteredList = options.itemsList;

            this.toggleDropdown = (e) => {
                e.stopPropagation();
                this.dropdownShow = !this.dropdownShow;
            };

            this.offClick = () => {
                this.dropdownShow = false;
            };

            this.selecting = (item, e) => {
                if (e) {
                    e.stopPropagation();
                }
                item.model = !item.model;
                if (options.multiSelected) {
                    _checkedCount = checkCount();
                    if (item[options.itemValue] == -1) {
                        checkAll(item);
                    } else {
                        for (let i = 0; i < options.itemsList.length; i++) {
                            if (options.itemsList[i][options.itemValue] == -1) {
                                if (_checkedCount == options.itemsList.length - 1) {
                                    options.itemsList[i].model = true;
                                } else {
                                    options.itemsList[i].model = false;
                                }
                            }
                        }
                    }
                    this.title = checkCount() + ' selected';
                } else {
                    this.title = item[options.itemName];
                    chosenItem.push(item[options.itemValue]);
                    this.offClick();
                }
            };

            this.fromControllerFn = () => {
                if (options.multiSelected) {
                    return returnedArray();
                } else {
                    return chosenItem;
                }
            };

            if (options) {
                if(typeof options.hasSearch != 'boolean' || typeof options.multiSelected != 'boolean') {
                    throw new Error('options.hasSearch and options.multiSelected must be boolean!options.hasSearch is ' + (typeof options.hasSearch) + ' and options.multiSelected is ' + (typeof options.multiSelected));
                }
                if(typeof options.howManyItemsForAll != 'number') {
                    throw new Error('options.howManyItemsForAll must be number!options.howManyItemsForAll is ' + (typeof options.howManyItemsForAll));
                }
                if(typeof options.itemsList != 'object') {
                    throw new Error('options.itemsList must be object!options.howManyItemsForAll is ' + (typeof options.itemsList));
                }

                if(typeof options.itemName != 'string' || typeof options.itemValue != 'string') {
                    throw new Error('options.itemName and options.itemValue must be string!options.hasSearch is ' + (typeof options.itemName) + ' and options.multiSelected is ' + (typeof options.itemValue));
                }

                if (options.multiSelected) {
                   checkCount = () => {
                       let counter = 0;
                       for (let i = 0; i < options.itemsList.length; i++) {
                           if (options.itemsList[i].model && options.itemsList[i][options.itemValue] != -1) {
                               counter++;
                           }
                       }
                       return counter;
                   };

                   checkAll = (item) => {
                       for (let i = 0; i < options.itemsList.length; i++) {
                           if (options.itemsList[i][options.itemValue] != -1) {
                               options.itemsList[i].model = item.model;
                           }
                       }
                   };

                   returnedArray = () => {
                       let arr = [];
                       for (let i = 0; i < options.itemsList.length; i++) {
                           if (options.itemsList[i].model && options.itemsList[i][options.itemValue] != -1) {
                               arr.push(Number(options.itemsList[i][options.itemValue]));
                           }
                       }
                       return arr;
                   }

                }

                if (options.hasSearch) {
                   this.search = (str) => {
                       let arr = [];
                       for (let i = 0; i < options.itemsList.length; i++) {
                           if (options.itemsList[i][options.itemName].search(str) != -1) {
                               arr.push(options.itemsList[i]);
                           }
                       }
                       this.filteredList = arr;
                   }
                }

                predefineFunction();

            } else {
                throw new Error('There are not options given!');
            }
        };

        return DropDown;
    }
);
