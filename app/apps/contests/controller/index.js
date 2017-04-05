define(['contestsFilterSrv'
	], () => {
	'use strict';

	var indexCtrl = ($scope, contestsFilterSrv, dispatcherSrv, $filter) => {

        //show calendar

        $scope.showCalendarFunc = false;
        $scope.showCalendar = () => {
            $scope.showCalendarFunc = !$scope.showCalendarFunc;
        };

        //calendar

        // test start

            $scope.testOptions = {
                title       : 'main test',
                searchName  : 'search',
                resetName   : 'cancel',
                fn(data) {
                    console.log(data);
                },
                checkboxes : [{
                    options : {
                        list : [{
                            name    : 'testCheck1',
                            model   : true,
                            id      : 1
                        },
                        {
                            name    : 'testCheck2',
                            model   : true,
                            id      : 2
                        },
                        {
                            name    : 'testCheck3',
                            model   : true,
                            id      : 3
                        },
                        {
                            name    : 'testCheck4',
                            model   : true,
                            id      : 4
                        }],
                        listName    : 'testCheckbox',
                        criterion   : 'id'
                    },
                    fn() {
                    },
                }],
                radiobuttons : [{
                    options : {
                        list : [{
                            name    : 'testRadio1',
                            model   : true,
                            id      : 1
                        },
                        {
                            name    : 'testRadio2',
                            model   : false,
                            id      : 2
                        },
                        {
                            name    : 'testRadio3',
                            model   : false,
                            id      : 3
                        },
                        {
                            name    : 'testRadio4',
                            model   : false,
                            id      : 4
                        }],
                        listName    : 'testRadio',
                        criterion   : 'id'
                    },
                    fn() {
                    }
                }]
        }
        // test end

        $scope.dayFormat = "d";

        // To select a single date, make sure the ngModel is not an array.
        // $scope.selectedDate = null;

        // If you want multi-date select, initialize it as an array.

        $scope.selectedDate = [];
        var date = new Date();
        $scope.msg = $filter('date')(new Date(), 'dd, MMMM yyyy');
        $scope.firstDayOfWeek = 0; // First day of the week, 0 for Sunday, 1 for Monday, etc.
        $scope.setDirection = (direction) => {
            $scope.direction = direction;
            $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
        };
        $scope.counter = 0;

        $scope.dayClick = (date) => {
            $scope.msg = date.getTime();
            $scope.selectedDate.push($scope.msg);
            if ($scope.selectedDate.length == 2) {
                if ($scope.selectedDate[0] < $scope.selectedDate[1]) {
                    $scope.msg1 = $filter('date')($scope.selectedDate[0], 'd, MMM yyyy');
                    $scope.msg2 = $filter('date')($scope.selectedDate[1], 'd, MMM yyyy');
                } else {
                    $scope.msg1 = $filter('date')($scope.selectedDate[1], 'd, MMM yyyy');
                    $scope.msg2 = $filter('date')($scope.selectedDate[0], 'd, MMM yyyy');
                }
                $scope.filter.startDate = $scope.msg1;
                $scope.filter.endDate = $scope.msg2;
                $scope.selectedDate = [];
            }
            $scope.counter++;
        };

        $scope.prevMonth = (data) => {
            $scope.msg = data.month + ", " + data.year;
        };

        $scope.nextMonth = (data) => {
            $scope.msg = data.month + ", " + data.year;
        };

        $scope.tooltips = true;
        $scope.setDayContent = (date) => {

            // You would inject any HTML you wanted for
            // that particular date here.
            return "<p></p>";

            // You could also use an $http function directly.
            return $http.get("/some/external/api");

            // You could also use a promise.
            var deferred = $q.defer();
            $timeout(() => {
                deferred.resolve("<p></p>");
            }, 1000);
            return deferred.promise;

        };


        // listen for lobby info

        $scope.filter = {};

        let event = ('lobbyInfo', (e, data) => {
            event();
            $scope.filter.minModel = data.MinEntryFee;
            $scope.filter.maxModel = data.MaxEntryFee;
            $scope.filter.minEntryFee = data.MinEntryFee;
            $scope.filter.maxEntryFee = data.MaxEntryFee;
        });

        var filters;

        filters = new contestsFilterSrv();
        $scope.arrForList = filters.arrForList;
        $scope.contestDetails = filters.contestDetails;
        $scope.prizes = filters.prizes;

        // testing
        
        $scope.test = {
            list : $scope.prizes,
            name : 'test',
            criterion : 'id'
        }

        // end of testing
        


        // filter functionality

        $scope.filteringLobby = (e, detail, item) => {
            e.stopPropagation();
            if (detail == 'sport type') {
                $scope.idToSend = item.id;
                for (let i = 0; i < $scope.contestDetails[detail].length; i++) {
                    $scope.contestDetails[detail][i].model = false;
                }
                item.model = true;
            } else {
                item.model = !item.model;
            }
        };

        $scope.openCreateContest = function() {
            dispatcherSrv.broadcast('currentState', 'contestCreate');
        }

        // prize fund drop down

        $scope.openPrizeType = (e) => {
            e.stopPropagation();
            $scope.openPrizes = !$scope.openPrizes;
        };

        $scope.choosingPrizeType = (e, item) => {
            e.stopPropagation();
            item.model = !item.model;
        };

        // buttons control

        $scope.searchingByAllInputs = (e) => {
            e.stopPropagation();
            dispatcherSrv.broadcast('filteringLobby', {
                contestDetails: $scope.contestDetails,
                filter: $scope.filter,
                prizes: $scope.prizes
            });
            dispatcherSrv.broadcast('sportId', $scope.idToSend);
        };

        $scope.clearingAllInputs = (e) => {
            e.stopPropagation();
        };
    };

	indexCtrl.$inject = ['$scope', 'contestsFilterSrv', 'dispatcherSrv', '$filter'];


	return indexCtrl;
});
