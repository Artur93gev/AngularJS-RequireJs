define(['bankReportSrv',
	'pagination',
	'calendar',
	'contestDrawTable',
	'contestsRenaming',
	'makingDataForLobbyFilter'
	], () => {
	'use strict';
	
	let contestDrawTable = ($interval, $document, $rootScope, mainSrv, contestsGridRenaming, bankReportSrv, httpSrv, makingDataForLobbyFilter, dispatcherSrv, $ocLazyLoad) => {

		let req, item = {}, i, j, k, key, pageControl, list = [], arr, event;
		let _contests = (options) => {
			req = {
				method 	: 'GET',
				url 	: 'api/contests/firstCall?LobbyType=' + options.lobbyType + '&current_page=' + options.pageToGet + '&sport_id=' + options.sportId,
				headers	: {
					'Content-Type'	: 'application/json'
				}
			};
			httpSrv.request(req, 'contests');
		};
		let _cancelContests = (data) => {
			req = {
				method 	: 'POST',
				url 	: 'api/contests/cancel',
				headers : {
					'Content-Type' : 'application/json'
				},
				data 	: data
			};
			httpSrv.request(req, 'cancelContest');
		};
		let _filteredLobby = (options, sortArr) => {
			req = {
				method 	: 'POST',
				headers	: {
					'Content-Type' : 'application/json'
				},
				url 	: 'api/contests/?LobbyType=' + options.lobbyType + '&current_page=' + options.pageToGet + '&sport_id=' + sortArr[1],
				data 	: sortArr[0]
			};
			httpSrv.request(req, 'filteredLobby');
		};
		return {
			restrict	: 'EA',
			transclude 	: true,
			scope 		: false,
			templateUrl : 'app/apps/shared/directives/contestDrawTable/view/index.html',
			link(scope, elem, attr) {

                $ocLazyLoad.load({
                	files : ['app/apps/shared/directives/contestDrawTable/assets/stylesheets/css/app.css']
				});

				let first, fevent, revent;
                let firstRequestFlag = true;
                let params = {};

			// normalize table size for headres controll

				scope.normalize = () => {
					angular.element('.fs-back-office-contest-grid-header-block')[0].style.width = (124 * (scope.headersForControl.length - list.length)) + 'px';
					angular.element('.fs-back-office-contest-grid-content')[0].style.width = (124 * (scope.headersForControl.length - list.length) + 'px');
				};

				//test

				scope.normalizetest = (value) => {
					// console.log(value)
					angular.element('.fs-back-office-contest-grid-header-block')[0].style.width = (124 * value) + 'px';
					angular.element('.fs-back-office-contest-grid-content')[0].style.width = (124 * value) + 'px';
				};				
				
			// checkbox control

				scope.headersForControl = [];
				scope.details = {
					visibility : false
				};
				scope.bank = {};

				scope.choosingContestsForCancel = (item) => {
					item.$$model = !item.$$model;
				};

				// pageControl = new pagination();
				// pageControl.page.sportId = scope.sportId || 2;
                //
                //
				// pageControl.page.lobbyType = +attr.lobbytype;

			// opening contest create part (later it must be by parametters setted from the location that uses this action)

				scope.openBackOfficeCreateContest = () => {
                    dispatcherSrv.broadcast('currentState', 'contestCreate');
			    };

			// checking typeof value

				scope.isNumber = (item) => {
					return angular.isNumber(item);
				};

			// page control

				// scope.changingPage = (item) => {
				// 	if (item.value != pageControl.page.currentPage) {
				// 		scope.arrOfPages = pageControl.choosedPageFromTable(item);
				// 		scope.gettingPage();
				// 	}
				// };

			// listenning to sportId

				event = scope.$on('sportId', (e, data) => {
					event();
					if (data) {
						//pageControl.page.sportId = data;
						params.sportId = data;
					} else {
						//pageControl.page.sportId = scope.sportId || 2;
                        params.sportId = scope.sportId || 2;
					}
				});
 				
				scope.tryingToDrawTable = (data) => {
					try {
						$rootScope.$broadcast('lobbyInfo', data.LobbyInfo);
						// pageControl.page.pageCount = +data.LobbyInfo.PageCount;
						// if (!first) {
						// 	scope.arrOfPages = pageControl.choosedPageFromTable({value : 1});
						// 	first = true;
						// }
                        scope.pageCount = +data.LobbyInfo.PageCount;
                        if (firstRequestFlag) {
                            $rootScope.$broadcast('pageTest', scope.pageCount);
                            firstRequestFlag = false;
                        }
						scope.headersForControl = [];
						scope.headersForTable = data.ContestList;
						
						scope.contestsList = angular.copy(scope.headersForTable);
						scope.headersForTable = contestsGridRenaming.renaming(scope.headersForTable);
					} catch(err) {
						console.log(err);
                        dispatcherSrv.broadcast('currentState', 'login');
					}
					try {
						for (i = 0; i < scope.headersForTable[0].length; i++) {
							item.name = scope.headersForTable[0][i].name;
							item.model = true;
							scope.headersForControl.push(item);
							item = {};
						}
						if (scope.intervalsOfHours) {
							$interval.cancel(scope.intervalsOfHours);
						}

						scope.intervalsOfHours = $interval(function() {
							for (i = 0; i < scope.hours.length; i++) {
								scope.headersForTable[scope.hours[i]][scope.headersForTable[scope.hours[i]].length - 1].value['ContestDate'] -= 1000;
							}
						}, 1000);
					} catch(err) {
						console.log(err);
					}
					scope.normalize();
					scope.loaderContest.show = false;
				};

			// getting contest for unique sport

				scope.gettingPage = (val) => {
					scope.loaderContest = {
						show : true
					};
                    params.sportId = scope.sportId || 2;
                    params.lobbyType = +attr.lobbytype;
                    params.pageToGet = val;
					_contests(params);
					event = scope.$on('contests', (e, data) => {
						event();
						if (data) {
							scope.tryingToDrawTable(data);
						}
					});
				};

				scope.gettingPage(1);
				scope.$on('daysAndDate', (e, data) => {
					if (data) {
						scope.days = data.days;
						scope.hours = data.hours;
					}
				});

			// canceling choosed contest

				scope.cancelingContests = () => {
					arr = [];
					for (j = 0; j < scope.headersForTable.length; j++) {
						if (scope.headersForTable[j].$$model) {
							for (key in scope.headersForTable[j]) {
								if (scope.headersForTable[j][key].name == 'ContestId') {
									arr.push(scope.headersForTable[j][key].value);
								}
							}
						}
					}

					data = JSON.stringify(arr);
					_cancelContests(data);
					event = scope.$on('cancelContest', (e, data) => {
						event();
						if (data) {
							scope.gettingPage();
						}
					});
				};

			// headers control

				scope.headers = {
					control : false
				};

				scope.openHeadersControl = (e) => {
					scope.headers.control = !scope.headers.control;
					e.stopPropagation();
				};
				$document.on('click', (event) => {
			        scope.headers.control = false;
			        // scope.partner.settings = false;
			        scope.$apply();
			        return $document.off('click', event);
		      	});
				scope.choosingHeaders = (e, item) => {
					e.stopPropagation();
					if ((list.length + 1 != scope.headersForControl.length) || !item.model) {
						item.model = !item.model;
						list = [];
						for (j = 0; j < scope.headersForControl.length; j++) {
							if (!scope.headersForControl[j].model) {
								list.push(scope.headersForControl[j].name);
							}
						}
						scope.normalize();
						for (j = 0; j < scope.headersForTable.length; j++) {
							for (i = 0; i < scope.headersForTable[j].length; i++) {
								scope.headersForTable[j][i].model = true;
								for (k = 0; k < list.length; k++) {
									if (list[k] == scope.headersForTable[j][i].name) {
										scope.headersForTable[j][i].model = false;
									}
								}
							}
						}
					}
				};

				scope.choosingHeadersByKeyPress = (event, item) => {
					if (event.which == 32 || event.keyCode == 32) {
						scope.choosingHeaders(item);
					}
				};

			// getting message for lobby filter

				revent = scope.$on('filteringLobby', (e, data) => {
					revent();
					if (data) {
						gettingFilteredLobby(makingDataForLobbyFilter.filtering(data));
					}
				});

				var gettingFilteredLobby = (arr) => {
					scope.loaderContest = {
						show : true
					};
					_filteredLobby(params, arr);

					// TODO make this events name working without conflicting

					fevent = scope.$on('filteredLobby', (e, data) => {
						fevent();
						if (data) {
							scope.tryingToDrawTable(data);
						}
					});
				};
			}
		}
	};

	contestDrawTable.$inject = ['$interval', '$document', '$rootScope', 'mainSrv', 'contestsGridRenaming', 'bankReportSrv', 'httpSrv', 'makingDataForLobbyFilter', 'dispatcherSrv', '$ocLazyLoad'];

	return contestDrawTable;
});
