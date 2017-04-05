define([], () => {
	'use strict';

	var pageControlSrv;
	
	angular.module('shared').factory('pagination', pageControlSrv = () => {

		return function() {

			let arrToReturn,
				pageArr,
				j,
				item = {},
				changingState,
				makingArrOfPagesForView,
				nextPage,
				previousPage,
				firstPage,
				lastPage,
				choosedPage,
				pageCount,
				pageToGet,
				lobbyType,
				currentPage,
				sportId,
				currentState,
				checkingForState;

			this.page = {}

			Object.defineProperties(this.page, {
				'pageToGet'		: {
					enumarable 		: false,
					configurable 	: false,
					writeable 		: true,
					set(value) {
						if (typeof value =='number') {
							pageToGet = value;
						} else {
							console.error('PageToGet must be a number');
						}
					},
					get() {
						return pageToGet;
					}
				},
				'lobbyType' 	: {
					enumarable 		: false,
					configurable 	: false,
					set(value) {
						if (typeof value == 'number') {
							lobbyType = value;
						} else {
							console.error('Lobbytype must be Number')
						}
					},
					get() {
						return lobbyType;
					}
				},
				'currentPage' 	: {
					enumarable 	: false,
					set(value) {
						currentPage = value;
					},
					get() {
						return currentPage;
					}
				},
				'pageCount' 	: {
					enumarable 	: false,
					set(value) {
						if (typeof value == 'number') {
							pageCount = value;
						} else {
							console.error('PageCount must be Number')
						}
					},
					get() {
						return pageCount;
					}
				},
				'sportId' 		: {
					enumarable 	: false,
					set(value) {
						if (typeof value == 'number') {
							sportId = value;
						} else {
							console.error('SportId must be Number')
						}
					},
					get() {
						return sportId;
					}
				},
				'currentState'	: {
					enumarable 	: false,
					set(value) {
						if (typeof value == 'string') {
							currentState = value;
						} else {
							console.error('currentState must be String')
						}
					},
					get() {
						return currentState;
					}
				}
			});

			this.page.currentPage = 1;
			this.page.pageToGet = 1;
			this.states = ['less', 'begin', 'middle', 'end'];

			changingState = () => {
				pageArr = [];
				if (this.page.currentState == this.states[0]) {
					for (j = 1; j <= this.page.pageCount; j++) {
						pageArr.push(j);
					}
					return makingArrOfPagesForView(pageArr);
				}
				if (this.page.currentState == this.states[1]) {
					pageArr = [1, 2, 3, '...', '>', '>>'];
					return makingArrOfPagesForView(pageArr);
				}
				if (this.page.currentState == this.states[2]) {
					pageArr = ['<<', '<', '...'];
					for (j = this.page.currentPage; j <= this.page.currentPage + 2; j++) {
						pageArr.push(j);
					}
					pageArr.push('...', '>', '>>');
					return makingArrOfPagesForView(pageArr);
				}
				if (this.page.currentState = this.states[3]) {
					pageArr = ['<<', '<', '...'];
					for (j = this.page.pageCount - 2; j <= this.page.pageCount; j++) {
						pageArr.push(j);
					}
					return makingArrOfPagesForView(pageArr);
				}
			};
			makingArrOfPagesForView = (arr) => {
				arrToReturn = [];
				for (j = 0; j < arr.length; j++) {
					item.value = arr[j];
					if (this.page.currentPage == arr[j]) {
						item.model = true;
					} else {
						item.model = false;
					}
					arrToReturn.push(item);
					item = {}
				}
				return arrToReturn;
			};
			nextPage = () => {
				this.page.currentPage++;
				return checkingForState();
			};
			previousPage = () => {
				this.page.currentPage--;
				return checkingForState();
			};
			firstPage = () => {
				this.page.currentPage = 1;
				return checkingForState();	
			};
			lastPage = () => {
				this.page.currentPage = this.page.pageCount;
				return checkingForState();
			};
			choosedPage =() => {
				this.page.currentPage = this.page.pageToGet;
				return checkingForState();
			};
			checkingForState = () => {
				if (this.page.pageCount <= 3) {
					this.page.currentState = this.states[0];
					return changingState();
				} else {
					if (this.page.currentPage <= 2) {
						this.page.currentState = this.states[1];
						return changingState();
					} else {
						if (this.page.pageCount - this.page.currentPage < 3) {
							this.page.currentState = this.states[3];
							return changingState();
						} else {
							this.page.currentState = this.states[2];
							return changingState();
						}
					}
				}
			};
			this.choosedPageFromTable = (item) => {
				if (item.value == '>') {
					this.page.pageToGet = this.page.currentPage + 1;
					return nextPage();
				}
				if (item.value == '>>') {
					this.page.pageToGet = this.page.pageCount;
					return lastPage();
				}
				if (item.value == '<') {
					this.page.pageToGet = this.page.currentPage - 1;
					return previousPage();
				}
				if (item.value == '<<') {
					this.page.pageToGet = 1;
					return firstPage();
				}
				if (typeof(item.value) == 'number') {
					if ((this.page.currentPage != item.value) || (item.value == 1)) {
						this.page.pageToGet = item.value;
						return choosedPage();
					}
				}
			};
		}
	});

	pageControlSrv.$inject = [];

	// return pageControlSrv;
});
