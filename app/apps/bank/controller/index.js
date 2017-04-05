define([], () => {
	'use strict';

	var indexCtrl = ($scope, $root$Scope, mainSrv, httpSrv, bankReportSrv) => {
		let item, i, j, key, p, event, baseList, counter = 0, req;
		$scope.search = {};
		let _allPartners = () => {
			req = {
		        method: 'GET',
		        url: 'api/partners',
		        headers  : {
		            "Content-Type" : "application/json"
		        }
		    };
		    httpSrv.request(req, 'allPartners');
		}
		event = $scope.$on('allPartners', (e, data) => {
			event();
			if (data) {
				baseList = data;
				$scope.networksAllList = data;
				$scope.searchEngine = [];
				for (i = 0; i < $scope.networksAllList.length; i++) {
					item = $scope.networksAllList[i].name + $scope.networksAllList[i].id;
					$scope.searchEngine.push(item);
				}
				for (j = 0; j < mainSrv.PermissionsList.length; j++) {
					for (key in mainSrv.PermissionsList[j]) {
						if (key == 'Bank') {
							$scope.networkFromTes = mainSrv.PermissionsList[j];
						}
					}
				}
				$scope.networkFromTest = [];
				for (j = 0; j < $scope.networkFromTes.Bank[2].Network.length; j++) {
					for (key in $scope.networkFromTes.Bank[2].Network[j]) {
						$scope.networkFromTest.push($scope.networkFromTes.Bank[2].Network[j][key]);
					}
				}
			}
		});
		$scope.openEssaMode = () => {
			$scope.search.bool = !$scope.search.bool;
			_allPartners();
		};
		$scope.searchingPartners = () => {
			$scope.networksAllList = [];
			for (j = 0; j < $scope.searchEngine.length; j++) {
				p = $scope.searchEngine[j].search($scope.search.item);
				if (p > -1) {
					$scope.networksAllList.push(baseList[j]);
				}
			}
		};

		// getting more info about contest details

		$scope.getMoreInfo = (index, item) => {
			$scope.index = index;
			for (key in $scope.contestsList[index]) {
				if (item.name == key) {
					if (item.name == 'BankLogHistory') {
						$scope.detailsForContest = [];
						if ($scope.contestsList[index][key].length) {
							$scope.bank = {
								model 	: false,
								report 	: "export to excel"
							}
							$scope.detailsForContest = $scope.contestsList[index][key];
						} else {
							$scope.bank = {
								model 	: true,
								report 	: "ok",
								text 	: "There is no action to show"
							}
						}
						$scope.details.visibility = true;
					}
				}
			}
			/*
			* all deposit
			* all players
			* bankloghistriy
			* betcontrsuct reae
			* endbankbalancs satrtbankbalance
			* matchcount leaguecount
			* networkcount
			*/
		};
		
		$scope.closeContestsDetailsPopup = (e) => {
			e.stopPropagation();
			$scope.details.visibility = false;
		};
		$scope.stopEventPropagation = (e) => {
			e.stopPropagation();
		};

		// making bank report from Json to csv

		$scope.makingReportForContest = (e) => {
			e.stopPropagation();
			counter++;
			delete $scope.dataList[$scope.index]['BankLogHistory'];
			$scope.dataList[$scope.index]['BankLogHistory'] = $scope.contestsList[$scope.index]['BankLogHistory'];
			bankReportSrv.JSONToCSVConvertor($scope.dataList[$scope.index], 'Bank Report ' + counter, true);
		};

		event = $scope.$on('renamedArray', (e, data) => {
			event();
			if (data) {
				$scope.dataList = data;
			}
		});
	}

	indexCtrl.$inject = ['$scope', '$rootScope', 'mainSrv', 'httpSrv', 'bankReportSrv'];

	return indexCtrl;
});
