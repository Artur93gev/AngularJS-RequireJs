define(['createObjectForFixtures'], () => {
	'use strict';

	let indexCtrl = ($scope, backOfficeCreateContestSrv, $rootScope, httpSrv, dispatcherSrv, createObjectForFixtures, checkboxSrv) => {

		let k, arr, obj, i, j, req, event, fevent, objectForContestCreate = {}, competitionsList, counterForDistributed = 1, arrOfPercent, firstRound, lastRound, item, compItem, arrOfLeaguesInSelections, itemForRounds, arrOfMatchesInDayInRound, length, arrOfDaysInRound, arrOfMatchesInChoosedDay, itemForCustomRounds, imageElement, arrOfPlace, arrOfPrizeType, counterForPartners, counter, arrOfMatches, itemForMatches, itemForPrize, distributedData, flagForFixturesFirstTime = true, data, key;
		let _imageUpload = (id) => {
				req = {
						method		: 'POST',
						url 		: 'api/contests/' + id + '/prize/image',
						processData	: false,
						transformRequest: angular.identity,
						headers		: {
										'Content-Type' : undefined
										},
						contentType	: false,
						data 		: $rootScope.data
					}
				httpSrv.request(req, 'imageUpload');
		};
		let _createContest = (data) => {
			req = {
				method 	: 'POST',
				url 	: 'api/contests/Create',
				headers : {
					'Content-Type' : 'application/json'
				},
				data 	: data
			}
			httpSrv.request(req, 'createContest');
		};
		let _sports = () => {
			req = {
				method	: 'GET',
				url 	: 'api/Sports',
				headers : {
					'Content-Type' : 'application/json'
				}
			}
			httpSrv.request(req, 'sports');
			
		};
		let _potencialPrizeFund = (arr, value) => {
			req = {
				method 	: 'GET',
				url 	: 'api/contests/potentialprizefund?size=' + arr[0].model + '&entryFee=' + arr[1].model +'&maxUserTeams=' + value,
			};
			httpSrv.request(req, 'potencialPrizefund');
		};
		let _availablePartners = (data) => {
			req = {
				method	: 'GET',
				url 	: 'api/Partners/CanJoinContest?prizefund=' + data,
				headers	: {
					'Content-Type'	: 'application/json'
				}
			}
			httpSrv.request(req, 'availablePartners');
		};
		let _matchByRound = (leagueId, roundId) => {

			//"entryStatHub" "getMatchesByRound" [competitionId, roundId]
			req = {
				method	: 'GET',
				url 	: 'api/competitions/' + leagueId + '/fixture/rounds/' + roundId,
				headers	: {
					'Content-Type': 'application/json'
				}
			};
			httpSrv.request(req, 'matchByRound');
		};
		let _matchesByDay = (leagueId, date) => {

			//"entryStatHub" "getMatchesByDate" [competitionId, date]
			req = {
				method	: 'GET',
				url 	: 'api/competitions/' + leagueId + '/fixture/date/' + date,
				headers	: {
					'Content-Type': 'application/json'
				}
			};
			httpSrv.request(req, 'matchesByDay');
		};
		let _moneyCorrection = (data) => {
			req = {
				method 	: 'PUT',
				url 	: 'http://10.25.62.95:8089/api/BankOperations/InsertPartnerMoneyCorrection',
				headers : {
					'Content-Type' : 'application/json'
				},
				data 	: data
			}
			httpSrv.request(req, 'moneyCorrection');
		};
		let _competitionsList = (id) => {
			req = {
				method 		: 'GET',
				url 		: 'api/sports/' + id + '/competitions',
				headers  	: {
					'Content-Type' : 'application/json'
				}
			};
			httpSrv.request(req, 'competitionsList');
		};
		let _gettingFixture = (id) => {
			req = {
				method 	: 'GET',
				url 	: 'api/competitions/' + id + '/fixture',
				headers	: {
					'Type' : 'application/json'
				}
			}
			httpSrv.request(req, 'fixture');
		};
		let _allMatches = (id) => {
			req = {
				method	: 'GET',
				url 	: 'api/competitions/' + id + '/fixture?full=true',
				headers	: {
					'Content-Type': 'application/json'
				}
			}
			httpSrv.request(req, 'allMatches');
		};
		let _allPartners = () => {
			req = {
		        method: 'GET',
		        url: 'api/partners',
		        headers  : {
		            "Content-Type" : "application/json"
		        }
		    };
		    httpSrv.request(req, 'allPartners');
		};

		$scope.flag 						= {
											forPasswordPart : false
										}
		$scope.fifth						= false;
		$scope.error 					= {}
		$scope.prize 					= {
											text : true
											}
		$scope.contest 	 				= {
											guaranteedPercentage : 100
										}
		$scope.multiple 					= {
											model : 1
											}
		$scope.roundType 				= "Single round";
		$scope.isNetwork 				= {
											model 	: false
										}
		$scope.nextButton 				= "next";
		$scope.messageSend 				= {}
		$scope.elemForChange 			= '.fs-back-office-general-part';
		$scope.choosenPrivacy			= "Public";
		$scope.choosenSportId			= 2;
		$scope.leaguePrevious			= {}
		$scope.choosenSportType 			= "Soccer";
		$scope.leaguePartOpened 			= false;
		$scope.fixturePartOpened 		= false;
		$scope.detailsPartOpened 		= false;
		$scope.leaguePartChecked 		= false;
		$scope.generalPartChecked		= false;
		$scope.fixturePartChecked		= false;
		$scope.itemForPrizeNumber		= 10;
		$scope.choosenNetworkCount		= "All Networks";
		$scope.arrOfRegionsBySport 		= [];
		$scope.flagForThrowingError		= false;
		$scope.itemForCheckWithSize 		= 0;
		$scope.flagForLeagueCheckbox 	= false;
		$scope.contestTypeForSending		= 1;
		$scope.arrOfDistributedInputs 	= [1];
		$scope.isMultientryForSending 	= 1;

		//constants from service

		$scope.dataFromSrv = new backOfficeCreateContestSrv();

        // local

		$scope.arrOfMainParts 	= [{
									tab 	: '.fs-back-office-general-part',
									model 	: true
									},
									{
									tab 	: '.fs-back-office-select-league-part',
									model 	: false
									},
									{
									tab 	: '.fs-back-office-fixtures-part',
									model 	: false
									},
									{
									tab 	: '.fs-back-office-contest-details-part',
									model 	: false
									},
									{
									tab 	: '.fs-back-office-contest-network-part',
									model 	: false
								}];
		$scope.arrOfContestsOfMainParts 	= [{
											tab 	: '.fs-back-office-contest-menu-general',
											model 	: true
											},
											{
											tab 	: '.fs-back-office-contest-menu-league',
											model 	: false
											},
											{
											tab 	: '.fs-back-office-contest-menu-fixture',
											model 	: false
											},
											{
											tab 	: '.fs-back-office-contest-menu-details',
											model 	: false
											},
											{
											tab 	: '.fs-back-office-contest-network-details',
											model 	: false
										}];

	// opening and closing directive

		$scope.keyDownCloseBackOfficeCreateContest = (event) => {
			if (event.which == 27 || event.keyCode == 27) {
                dispatcherSrv.broadcast('currentState', 'contests');
			}
		};
		$scope.stopEventPropagation = (e) => {
			e.stopPropagation();
		};
		$scope.closeBackOfficeCreateContest = (e) => {
			e.stopPropagation();
            dispatcherSrv.broadcast('currentState', 'contests');
            if ($scope.messageSend.text == "your contest is created") {
                $scope.elemForChange = '.fs-back-office-general-part';
				$scope.changeActiveTab($scope.elemForChange);
                $scope.emptyAreas();
			}
		};

	// getting data from server

		// sport types for general part

		_sports();
		event = $scope.$on('sports', (e, data) => {
			event();
			if (data) {
				$scope.sportsForFirstChoose = data;
			}
		});

		// changing tabs

		$scope.openGenPart = (e) => {
			if (e) {
				e.stopPropagation();
			}
			$scope.elemForChange = '.fs-back-office-general-part';
			$scope.changeActiveTab($scope.elemForChange);
			$scope.nextButton = "next";
			$scope.flagForDraftButton = false;
		};
		$scope.openLeaguePart = (e) => {
			if (e) {
				e.stopPropagation();
			}
			$scope.checkingGeneralPart();
			if ($scope.flagForThrowingError) {
				$scope.elemForChange = '.fs-back-office-select-league-part';
				$scope.changeActiveTab($scope.elemForChange);
				$scope.nextButton = "next";
				$scope.flagForDraftButton = false;
				$scope.flagForThrowingError = false;
			}
		};
		
		$scope.openFixtPart = (e) => {
			if (e) {
				e.stopPropagation();
			}
			$scope.checkingLeaguePart();
			if ($scope.flagForThrowingError) {
				$scope.elemForChange = '.fs-back-office-fixtures-part';
				$scope.changeActiveTab($scope.elemForChange);
				$scope.nextButton = "next";
				$scope.flagForThrowingError = false;
				$scope.flagForDraftButton = false;
			}
		};
		
		$scope.openContDetPart = (e) => {
			if (e) {
				e.stopPropagation();
			}
			if($scope.newObjectForFixtures){
				if(!$scope.isSportByRound){
					obj = $scope.dataFromSrv.getAllDaysAndMaches($scope.newObjectForFixtures, $scope.chosenDuration);
				} else {
					obj = $scope.dataFromSrv.getAllRoundsAndMaches($scope.newObjectForFixtures, $scope.chosenDuration);
				}
				objectForContestCreate.Rounds = obj.rounds;
				objectForContestCreate.MatchIds = obj.matches;
				objectForContestCreate.Duration = $scope.chosenDuration = obj.duration;
				$scope.flagForThrowingError = true;
			}
			if ($scope.flagForThrowingError) {
				$scope.elemForChange = '.fs-back-office-contest-details-part';
				$scope.changeActiveTab($scope.elemForChange);
				$scope.nextButton = "save as draft";
				$scope.flagForDraftButton = true;
				$scope.flagForThrowingError = false;
			}
		};

		let getPotencialPrizeFund = (flag) => {
			_potencialPrizeFund($scope.dataFromSrv.arrEntriesAndPrize, $scope.multiple.model)
			event = $scope.$on('potencialPrizefund', (e, data) => {
				event();
				if (data) {
					$scope.dataFromSrv.arrEntriesAndPrize[2].model = data.PrizeFundAmount;
					if (flag) {
						getAvailablePartners();
					}
				}
			});
		};

		let getAvailablePartners = () => {
			_availablePartners($scope.dataFromSrv.arrEntriesAndPrize[2].model);
			event = $scope.$on('availablePartners', (e, data) => {
				event();
				if (data) {
					$scope.arrOfAvalaibles = data;
					_allPartners();
					fevent = $scope.$on('allPartners', (e, data) => {
						fevent();
						if (data) {
							$scope.allNetworkList = data;
							$scope.dataFromSrv.availablePartersFromAll($scope.allNetworkList, $scope.arrOfAvalaibles);
						}
					});
				}
			});
		};
		$scope.openNetworkPart = (e) => {
			getPotencialPrizeFund(true);
			e.stopPropagation();
			$scope.flagForThrowingError = true;
			$scope.elemForChange = '.fs-back-office-contest-network-part';
			$scope.changeActiveTab($scope.elemForChange);
			$scope.nextButton = "save as draft";
			$scope.flagForDraftButton = true;
		};

		$scope.changeActiveTab = (element) => {
			for (j = 0; j < 5; j++) {
				if ($scope.arrOfMainParts[j].tab == element) {
					$scope.arrOfMainParts[j].model = true;
					$scope.arrOfContestsOfMainParts[j].model = true;
				} else {
					$scope.arrOfMainParts[j].model = false;
					$scope.arrOfContestsOfMainParts[j].model = false;
				}
			}
		};

	// general part

		// dropdown's of general part

		// dropdown control

		$scope.openSportsDropDown = (e) => {
			e.stopPropagation();
			$scope.closeDropDowns();
			$scope.first = !$scope.first;
			$scope.dataFromSrv.dropDownCtrlFunc($scope.first, '.fs-back-office-arrow-down', '.fs-back-office-drop-down-list', 0);
		};

		$scope.openPrivacyDropDown = (e) => {
			e.stopPropagation();
			$scope.closeDropDowns();
			$scope.third = !$scope.third;
			$scope.dataFromSrv.dropDownCtrlFunc($scope.third, '.fs-back-office-arrow-down', '.fs-back-office-drop-down-list', 1);
		};
		$scope.closeDropDowns = () => {
			$scope.dataFromSrv.dropDownCtrlFunc(false, '.fs-back-office-arrow-down', '.fs-back-office-drop-down-list', 0);
			$scope.dataFromSrv.dropDownCtrlFunc(false, '.fs-back-office-arrow-down', '.fs-back-office-drop-down-list', 1);
		};

		$scope.choosingSportType = (item, id) => {
			$scope.choosenSportId = id;
			$rootScope.sportId = id;
			$scope.choosenSportType = item;
		};

		$scope.choosingPrivacy = (item) => {
			$scope.choosenPrivacy = item;
			if (item == "Public") {
				$scope.flag.forPasswordPart = false;
			} else {
				$scope.flag.forPasswordPart = true;
			}
		};
		$scope.$watch('contest', () => {
			if ($scope.contest.name) {
				$scope.error.contestName = false;
			}
			if ($scope.contest.password) {
				$scope.error.password = false;
			}
		}, true);

	// select league part
		
		$scope.selectingLeague = (league) => {
			if (league.id == 1177 || league.id == 1173 || league.id == 1174 || league.id == 1176 || league.id == 1175) {
				if ((league.id == $scope.choosenLeagueId) || (!$scope.leaguePrevious.model)) {
					league.model = !league.model;
					$scope.leaguePrevious.model = league.model;
					$scope.leagueChecked = !$scope.leagueChecked;
					if ($scope.leagueChecked) {
						$scope.error.league = false;
					}
					$scope.flagForLeagueCheckbox = !$scope.flagForLeagueCheckbox;
					$scope.choosenLeagueId = league.id;
				}
			}
		};

	// choose fixture part

		$scope.clickingFixturePart = function(id) {
			checkboxSrv.checkingFixturePart(id,  $scope.newObjectForFixtures);
		};

		let requestMatchesbyRound = (roundId, key) => {
			_matchByRound($scope.choosenLeagueId, roundId);
			event = $scope.$on('matchByRound', (e, data) => {
				event();
				if (data) {
					$scope.newObjectForFixtures[key] = createObjectForFixtures.createMachesByRound(data, $scope.newObjectForFixtures[key], key, true);
					$scope.loaderFantasyFixturesMini = false;
				}
			});
		};

		$scope.requestMachesByRound = (e, competitionId, roundId) => {
			e.stopPropagation();
			if(!$scope.haveAll) {
				Object.keys($scope.newObjectForFixtures).map((key) => {
					if($scope.newObjectForFixtures[key].id == roundId && !$scope.newObjectForFixtures[key].hasOwnProperty(0)) {
						$scope.loaderFantasyFixturesMini = true;
						requestMatchesbyRound(roundId, key);
					}
				});
			}
		};

		let requestMatchesByDate = (date, key) => {
			_matchesByDay($scope.choosenLeagueId, date);
			event = $scope.$on('matchesByDay', (e, data) => {
				event();
				if (data) {
					$scope.newObjectForFixtures[key] = createObjectForFixtures.createMachesByDay(data, $scope.newObjectForFixtures[key], [key], true);
					$scope.loaderFantasyFixturesMini = false;
				}
			});
		};

		$scope.requestMachesByDate = (e, competitionId, date) => {
			e.stopPropagation();
			if(!$scope.haveAll) {
				Object.keys($scope.newObjectForFixtures).map((key) => {
					if ($scope.newObjectForFixtures[key].id == date && !$scope.newObjectForFixtures[key].hasOwnProperty(0)) {
						$scope.loaderFantasyFixturesMini = true;
						requestMatchesByDate(date, key);
					}
				});
			}
		};

		$scope.requestAllMaches = (e, id, isChecked) => {
			e.stopPropagation();
			if(!$scope.haveAll && !isChecked  && !$scope.noRoundsOrDate) {
				$scope.loaderFantasyFixtures = true;
				_allMatches($scope.choosenLeagueId);
				event = $scope.$on('allMatches', (e, data) => {
					event();
					if (data) {
						$scope.newObjectForFixtures = createObjectForFixtures.createObjectForRoundsDaysMaches(data, true);
						$scope.loaderFantasyFixtures = false;
					}
				});
				$scope.haveAll = true;
			} else {
				$scope.clickingFixturePart(id);
				if(isChecked){
					Object.keys($scope.newObjectForFixtures).map((key) => {
						$scope.newObjectForFixtures[key].isVisible = false;
					});
				} else {
					Object.keys($scope.newObjectForFixtures).map((key) => {
						$scope.newObjectForFixtures[key].isVisible = true;
					});
				}
			}
		};

		//for show or hide maches

		$scope.triggerDetails = (e) => {
			e.stopPropagation();
			if( angular.element(e.target.parentElement).hasClass('fs-toZero')) {
				angular.element(e.target.parentElement).removeClass('fs-toZero');
			} else {
				angular.element(e.target.parentElement).addClass('fs-toZero');
			}
		};

	// contest details part

		$scope.radioCtrl = (item, arr) => {
			for (var j = 0; j < arr.length; j++) {
				if (arr[j].id == item) {
					arr[j].model = true;
				} else {
					arr[j].model = false;
				}
			}
		};
		$scope.choosingOfContestType = (item) => {
			if (item.id != 3) {
				for (var j = 0; j < $scope.dataFromSrv.arrContestType.length; j++) {
					if (item == $scope.dataFromSrv.arrContestType[j]) {
						$scope.dataFromSrv.arrContestType[j].model = true;
					} else {
						$scope.dataFromSrv.arrContestType[j].model = false;
					}
				}
				$scope.contestTypeForSending = item.id;
				if (item.id == 2) {
					$scope.dataFromSrv.arrEntriesAndPrize[0].model = 2;
					angular.element('.fs-back-office-create-contest-sizes')[0].disabled = true;
					$scope.radioCtrl(10, $scope.dataFromSrv.arrPrizes);
					$scope.error.size = false;
					$scope.flagForSizeCheck = true;
					$scope.closeDistributedPart();
				} else {
					angular.element('.fs-back-office-create-contest-sizes')[0].disabled = false;
				}
			}
		};

		$scope.choosingNetworkContest = () => {
			$scope.isNetwork.model = !$scope.isNetwork.model;
			if ($scope.isNetwork.model) {
				$scope.nextButton = "next";
				$scope.flagForDraftButton = false;
				$scope.contest.guaranteed = true;
			} else {
				$scope.nextButton = "save as draft";
				$scope.flagForDraftButton = true;
			}
		};

		$scope.choosingOfContestPrize = (item) => {
			if ($scope.contestTypeForSending != 2) {
				$scope.radioCtrl(item.id, $scope.dataFromSrv.arrPrizes);
				$scope.prize.text = true;
				if (item.id == 9) {
					angular.element('.fs-back-office-contest-details-prize-type-distributed').show();
				}
				$scope.itemForPrizeNumber = item.id;
			}
		};

		// calculation of prizefund

		$scope.autoCalcPrizefund = () => {
			getPotencialPrizeFund();
		};

		// distributed start

		$scope.closeDistributedPart = () => {
			angular.element('.fs-back-office-contest-details-prize-type-distributed').hide();								
		};
		$scope.sum = () => {
			$scope.percentSumForDistributed	= 0;
			arrOfPercent = angular.element('.fs-back-office-distributed-percent');
			for (var j = 0 ; j < arrOfPercent.length; j++) {
				$scope.percentSumForDistributed += +arrOfPercent[j].value;
			}
			if ($scope.percentSumForDistributed == 100) {
				$scope.flagForDistributed = true;
			}
		};
		$scope.addNewInputBlock = () => {
			arrOfPlace = angular.element('.fs-back-office-distributed-place');
			arrOfPercent = angular.element('.fs-back-office-distributed-percent');
			if (arrOfPlace[arrOfPlace.length - 1].value && arrOfPercent[arrOfPercent.length - 1].value) {
				
				//check the place part validation
				
				if (arrOfPercent[arrOfPercent.length -1].value > 0) {
					if (arrOfPlace[arrOfPlace.length - 1].value.match(/^[0-9]*-[0-9]*$/ ) || arrOfPlace[arrOfPlace.length - 1].value.match(/^[0-9]*$/)) {
						var itemForSplit = arrOfPlace[arrOfPlace.length - 1].value.split('-');
						if (+$scope.itemForCheckWithSize < +itemForSplit[0]) {
							$scope.itemForCheckWithSize = itemForSplit[1] || itemForSplit[0];
							if (+$scope.itemForCheckWithSize < $scope.dataFromSrv.arrEntriesAndPrize[0].model) {
								if ((+itemForSplit[0] < +itemForSplit[1]) || !itemForSplit[1]) {

									// check percent part validation

									$scope.sum();

									if ($scope.percentSumForDistributed < 100) {
										counterForDistributed++;
										$scope.arrOfDistributedInputs.push(counterForDistributed);
										console.log("correct");
										$scope.dataFromSrv.errorMessageReport(false, '', true, true);
									} else {
										$scope.dataFromSrv.errorMessageReport(true, "Sorry, you can enter not more than " + (100 - ($scope.percentSumForDistributed - (+arrOfPercent[arrOfPercent.length - 1].value))) + "%", false, true);
										$scope.flagForDistributed = false;
										//copy error message;?????????????????????
										arrOfPlace = angular.element('.fs-back-office-distributed-place');
										if(arrOfPlace[arrOfPlace.length - 2]) {
											var act = arrOfPlace[arrOfPlace.length - 2].value.split('-');
											$scope.itemForCheckWithSize = act[1] || act[0];
										}	else {
											$scope.itemForCheckWithSize = 0;
										}
										return;
									}
								} else {
									$scope.dataFromSrv.errorMessageReport(true, "PLease enter interval in the correct order.", true, false);
									$scope.flagForDistributed = false;
									return;
								}
							} else {
								$scope.dataFromSrv.errorMessageReport(true, "Sorry, number of players has expired.Please distribute the whole prize fund.");
								if ($scope.itemForCheckWithSize != $scope.dataFromSrv.arrEntriesAndPrize[0].model) {
									arrOfPlace = angular.element('.fs-back-office-distributed-place');
									if (arrOfPlace[arrOfPlace.length - 2]) {
										var act = arrOfPlace[arrOfPlace.length - 2].value.split('-');
										$scope.itemForCheckWithSize = act[1] || act[0];
									} else {
										$scope.itemForCheckWithSize = 0;
									}
									$scope.flagForDistributed = false;
									return;
								} else {
									$scope.flagForDistributed = true;
								}
							}
						} else {
							$scope.dataFromSrv.errorMessageReport(true, "Please enter position number equal to " + (+$scope.itemForCheckWithSize + 1), true, false);
							$scope.flagForDistributed = false;
							return;
						}
					} else {
						$scope.dataFromSrv.errorMessageReport(true, "You can use only numbers or numbers with dash.", true, false);
						$scope.flagForDistributed = false;
						return;
					}
				} else {
					$scope.dataFromSrv.errorMessageReport(true, "Please enter valid percentage.", false, true);
					$scope.flagForDistributed = false;
				}
			} else {
				if (arrOfPlace[arrOfPlace.length - 1].value) {
					$scope.dataFromSrv.errorMessageReport(true, "Please enter percentage.", false, true);
					$scope.flagForDistributed = false;
					return;
				}
				if (arrOfPercent[arrOfPercent.length - 1].value) {
						$scope.dataFromSrv.errorMessageReport(true, "Please enter position.", true, false);
					$scope.flagForDistributed = false;
					return;
				}
				$scope.dataFromSrv.errorMessageReport(true, "Please fill the following spaces.", true, true);
				$scope.flagForDistributed = false;
				return;
			}
		};

		$scope.saveDistributedOptions = () => {
			$scope.dataFromSrv.errorMessageReport(false, '', true, true);
			$scope.sum();
			if ($scope.flagForDistributed) {
				distributedData = [];
				if ($scope.percentSumForDistributed == 100) {
					$scope.dataFromSrv.errorMessageReport(false, '', true, true);
					for (var j = 0; j < arrOfPlace.length; j++) {
						item = {}
						var hell = arrOfPlace[j].value.split('-');
						item.from = +hell[0];
						item.to = +hell[1] || +hell[0];
						item.percent = +arrOfPercent[j].value;
						item.type = 9;
						distributedData.push(item);
					}
					$scope.PrizeFundItems = distributedData;
					$scope.closeDistributedPart();
				} else {
					$scope.dataFromSrv.errorMessageReport(true, "Please set the all pricefond.You can set only " + (100 - ($scope.percentSumForDistributed - (+arrOfPercent[arrOfPercent.length - 1].value))) + '%', false, true);
				}
			} else {
				console.log("copied message");
			}
		};

		// distributed end

		//prize text part

		$scope.choosingPrizeText = () => {
			$scope.radioCtrl(undefined, $scope.dataFromSrv.arrPrizes);
			$scope.prize.text = false;
			$scope.closeDistributedPart();									
		};
		
		//end ofthe prize text part

		$scope.$watchGroup(['itemForPrizeNumber', '$scope.dataFromSrv.garrEntriesAndPrize[0].model'], (newValues, oldValues, $scope) => {
			if ($scope.itemForPrizeNumber == 8 && $scope.dataFromSrv.arrEntriesAndPrize[0].model % 4 != 0) {
				$scope.error.size = true;
				$scope.messageForSizeChange = "Please choose the size of entrants to be divisible by 4.";
				$scope.flagForSizeCheck = false;
			} else if ($scope.itemForPrizeNumber == 2 && $scope.dataFromSrv.arrEntriesAndPrize[0].model % 3 != 0) {
				$scope.error.size = true;
				$scope.flagForSizeCheck = false;
				$scope.messageForSizeChange = "Please choose the size of entrants to be divisible by 3.";
			} else if ($scope.itemForPrizeNumber == 1 && $scope.dataFromSrv.arrEntriesAndPrize[0].model % 2 != 0) {
				$scope.error.size = true;
				$scope.flagForSizeCheck = false;
				$scope.messageForSizeChange = "Please choose the size of entrants to be divisible by 2.";
			} else {
				$scope.error.size = false;
				$scope.flagForSizeCheck = true;
			}
			if ((newValues[1] < +$scope.itemForCheckWithSize) && (objectForContestCreate.PrizeFund.Type == 9)) {
				console.log("change the distributed or clear don't know yet");
				$scope.messageForSizeChange = "Please adjust place or range distribution under prize type.";
				$scope.flagForSizeCheck = false;
				angular.element('.fs-back-office-contest-details-error-message-of-size')[0].style.display = 'inline-block';
			}
		});
		$scope.choosingOfEntryType = (item) => {
			$scope.isMultientryForSending = item.id;
			if (item.id == 1) {
				objectForContestCreate.MaxUserTeams = 1;
			}
			$scope.radioCtrl(item.id, $scope.dataFromSrv.arrContestEntries);
		};
		$scope.selectingUserMaxTeams = () => {
			objectForContestCreate.MaxUserTeams = $scope.multiple.model;
		};
		$scope.settingContestGuaranted = () => {
			if (!$scope.isNetwork.model) {
				$scope.contest.guaranteed = !$scope.contest.guaranteed;
			}
		};
		$scope.deletingUploadedImage = () => {
			imageElement = angular.element.find('.fs-back-office-contest-details-image-upload');

			// for recycle

			window.URL.revokeObjectURL($scope.tmpPath);
			angular.element('.fs-back-office-contest-details-image-upload-recycle')[0].style.display = '';
			angular.element('.fs-back-office-contest-details-image-upload-input')[0].style.zIndex = '1';

			// for iamge

			imageElement[0].style.backgroundImage ='';
			imageElement[0].style.opacity = 0;
			imageElement[0].src = "";
			imageElement[0].currentsrc = "";
		};

	// network part
		$scope.selectingNetworkFromList = (item) => {
			item.available = !item.available;
			// console.log("success", item);
		};
		$scope.throwErr = (item) => {
			// console.log("error", item);
		};

		let moneyCorrection = (data) => {
			_moneyCorrection(data);
			event = $scope.$on('moneyCorrection', (e, data) => {
				event();
				if (data) {
					console.log(data);
				}
			});
		};

		$scope.sendingCorrection = (item) => {
			data = {
				PartnerId 	: item.id,
				Amount 	: item.correct
			}
			data = JSON.stringify(data);
			moneyCorrection(data);
		};

	// end network part

	//	buttons control

		// going to the next tab
		competitionsList = () => {
			_competitionsList($scope.choosenSportId);
			event = $scope.$on('competitionsList', (e, data) => {
				event();
				if (data) {
					$scope.arrOfRegionsBySport = data;
				}
			});
		}
		
		$scope.checkingGeneralPart = () => {
			if ($scope.contest.name) {
				objectForContestCreate.Name = $scope.contest.name;
			} else {
				$scope.error.contestName = true;
			}
			
			// open this part later check if it is not Essa mode:) the set to =>
			
			objectForContestCreate.PartnerId = $scope.$parent.partnerId;
			if ($scope.choosenPrivacy == "Private") {
				if ($scope.contest.password) {
					objectForContestCreate.Password = $scope.contest.password;
				} else {
					$scope.error.password = true;
				} 
			}
			counter = 0;
			if (objectForContestCreate) {
				for (key in objectForContestCreate) {
					counter++;
				}
				if (($scope.choosenPrivacy == "Private" && counter == 3) || ($scope.choosenPrivacy == "Public" && counter == 2) || ($scope.leaguePartOpened)) {
					competitionsList();
					$scope.leaguePartOpened = true;
					$scope.flagForThrowingError = true;
					$scope.generalPartChecked = true;
				}
			}
		};

		let gettingFixture = () => {
			_gettingFixture($scope.choosenLeagueId);
			event = $scope.$on('fixture', (e, data) => {
				event();
				if (data) {
					$scope.newObjectForFixtures = createObjectForFixtures.createObjectForRoundsDaysMaches(data, false);
					if (data.RoundOrDates[0]) {
						if (data.RoundOrDates[0].RoundNumber == 0) {
							$scope.isSportByRound = false;
						} else {
							$scope.isSportByRound = true;
						}
						$scope.noRoundsOrDate = false;
					} else {
						$scope.noRoundsOrDate = true;
					}
					if ($scope.newObjectForFixtures[0]) {
						checkboxSrv.checkingFixturePart($scope.newObjectForFixtures[0].id,  $scope.newObjectForFixtures);
					}
					flagForFixturesFirstTime = false;
				}
			});
		};

		$scope.checkingLeaguePart = () => {
			objectForContestCreate.CompetitionIds = [];
			for (j = 0; j < $scope.arrOfRegionsBySport.length; j++) {
				for (k = 0; k < $scope.arrOfRegionsBySport[j].competitions.length; k++) {
					if ($scope.arrOfRegionsBySport[j].competitions[k].model) {
						gettingFixture();
						$scope.error.league 			= false;
						$scope.leaguePartChecked 	= true;
						$scope.fixturePartOpened 	= true;
						$scope.flagForThrowingError 	= true;
						objectForContestCreate.CompetitionIds.push($scope.arrOfRegionsBySport[j].competitions[k].id);
					}
				}
			}
			if (!$scope.flagForThrowingError) {
				$scope.error.league = true;
			}
		};

		$scope.changingTabByButton = (e) => {
			for (i = 0; i < 4; i++) {
				if ($scope.elemForChange == $scope.arrOfMainParts[i].tab) {
					break;
				}
			}
			switch(i) {
				case 0 	:
					$scope.checkingGeneralPart();
					break;
				case 1	:
					$scope.checkingLeaguePart();
					break;
				case 2	:
					$scope.openContDetPart(e);
					break;
				case 3  :
					if (!$scope.isNetwork.model) {
						$scope.sendingDataForContestCreate();
					} else {
						$scope.openNetworkPart(e);
					}
					break;
				case 4	:
					$scope.sendingDataForContestCreate();
			}
			if ($scope.flagForThrowingError && $scope.flag) {
				$scope.elemForChange = $scope.arrOfMainParts[i + 1].tab;
				$scope.changeActiveTab($scope.elemForChange);
				$scope.flagForThrowingError = false;
			}
		};
		$scope.draftingNewContest = () => {
			if ($scope.dataFromSrv.arrEntriesAndPrize[0].model && $scope.flagForSizeCheck) {
				objectForContestCreate.Size = $scope.dataFromSrv.arrEntriesAndPrize[0].model;
			}
			if ($scope.dataFromSrv.arrEntriesAndPrize[1].model) {
				objectForContestCreate.EntryFee = $scope.dataFromSrv.arrEntriesAndPrize[1].model;
			}
			objectForContestCreate.IsMultiEntry = $scope.isMultientryForSending;
			objectForContestCreate.ContestType = $scope.contestTypeForSending;
			if (objectForContestCreate.IsMultiEntry == 2) {
				objectForContestCreate.MaxUserTeams = $scope.multiple.model;
			}
			arr = [];
			for (j = 0; j < $scope.allNetworkList.length; j++) {
				if ($scope.allNetworkList[j].available) {
					arr.push($scope.allNetworkList[j].id);
				}
			}
			objectForContestCreate.PartnerIds = arr;
			objectForContestCreate.NetworkType = (arr.length == 1) ? 1 : 2;
			itemForPrize  = {}
			itemForPrize.Type = $scope.itemForPrizeNumber;
			itemForPrize.IsGuaranted = $scope.contest.guaranteed;
			itemForPrize.PrizeFundItems = $scope.PrizeFundItems;
			itemForPrize.GuaranteedPercentage = $scope.contest.guaranteedPercentage;
			itemForPrize.PrizeText = angular.element('.fs-back-office-contest-details-text-area')[0].value;
			itemForPrize.PrizeImage = null;
			itemForPrize.PrizeImageName = $scope.contest.imageName;
			objectForContestCreate.PrizeFund = itemForPrize;
			$scope.dataForSend = JSON.stringify(objectForContestCreate);
			if (!$scope.isNetwork.model) {
				$scope.flag = false;
			}
			$scope.sendingDataForContestCreate();
		};
		$scope.sendingDataForContestCreate = () => {
			if ($scope.dataForSend.length >= 10) {
				dispatcherSrv.broadcast('loaderShow');
				_createContest($scope.dataForSend);
				event = $scope.$on('createContest', (e, data) => {
					event();
					if (data) {
						dispatcherSrv.broadcast('loaderHide');
						if ($rootScope.data) {
							_imageUpload(data.Id);
						}
						dispatcherSrv.broadcast('error', {
							applyButton : "apply",
							header : "success",
							text : "your contest is created"
						});
						$scope.emptyAreas();
					}
				});
			} else {
				console.log("Error of filling, can't save contest");
			}
		};

		// emptiing whole areas

		$scope.emptyAreas = () => {
			$scope.first  						= false;
			$scope.second 						= false;
			$scope.third  						= false;
			$scope.foured 						= false;
			$scope.fifth							= false;
			$scope.contest 	 					= {
													guaranteedPercentage : 100
												}
			$scope.flag 							= {
													forPasswordPart : false
												}
			$scope.isNetwork.model 				= false;
			$scope.flagForThrowingError			= false;
			$scope.flagForLeagueCheckbox 		= false;
			$scope.generalPartChecked			= false;
			$scope.leaguePartChecked 			= false;
			$scope.fixturePartChecked			= false;
			$scope.multiple 						= {}
			$scope.choosenSportType 				= "Soccer";
			$scope.choosenPrivacy				= "Public";
			$scope.choosenNetworkCount			= "All Networks";
			$scope.dataForSend					= {}
			$scope.leagueChecked 				= false;
			$scope.nextButton 					= "next";
			$scope.flagForDraftButton 			= false;
			objectForContestCreate				= {}
			$scope.leaguePrevious.model 			= undefined;
			$scope.choosenLeagueId 				= undefined;
			$scope.messageSend					= {}
			$scope.multiple 						= {
														model : 1
													}
			$scope.isMultientryForSending 		= 1;
			$scope.itemForPrizeNumber			= 10;
			$scope.leaguePartOpened 			= false;
			$scope.contestTypeForSending			= 1;
			$scope.dataFromSrv.arrEntriesAndPrize[0].model 	= 3;
			$scope.arrOfRegionsBySport 			= [];

			// cleaning distributed

			counterForDistributed 		= 1;
			$scope.arrOfDistributedInputs	= [1];
			$scope.$$postDigest(function(){
				arrOfPlace = angular.element('.fs-back-office-distributed-place');
				arrOfPercent = angular.element('.fs-back-office-distributed-percent');
				if (arrOfPlace[arrOfPlace.length - 2]) {
					var act = arrOfPlace[arrOfPlace.length - 2].value.split('-');
					$scope.itemForCheckWithSize = act[1] || act[0];
				} else {
					$scope.itemForCheckWithSize = 0;
				}
				$scope.closeDistributedPart();
			});


			$scope.error = {};
			$scope.contest.name = '';
			angular.element('.fs-back-office-contest-multiple-entry')[0].style.display = "";
			angular.element('.fs-back-office-contest-details-text-area')[0].value = '';
			$scope.deletingUploadedImage();
			for (j = 0; j < $scope.dataFromSrv.arrEntriesAndPrize.length; j++) {
				if (j == 0) {
					$scope.dataFromSrv.arrEntriesAndPrize[j].model = 3;
				} else {
					$scope.dataFromSrv.arrEntriesAndPrize[j].model = 0;
				}
			}
			angular.element('.fs-back-office-create-contest-sizes')[0].disabled = false;
			$scope.radioCtrl(1, $scope.dataFromSrv.arrContestType);
			$scope.radioCtrl(1, $scope.dataFromSrv.arrContestEntries);
			$scope.radioCtrl(10, $scope.dataFromSrv.arrPrizes);

			arrOfLeaguesInSelections = angular.element.find('.fs-back-office-select-league-input');
			for (j = 0; j < arrOfLeaguesInSelections.length; j++) {
				arrOfLeaguesInSelections[j].checked = false;
				arrOfLeaguesInSelections[j].disabled = false;
			}
			$scope.closeDropDowns();
			$scope.openGenPart();
		};
		$scope.CancelingCreateContestProcess = (e) => {
			$scope.closeBackOfficeCreateContest(e);
		};
		$scope.closingErrSucPopup = (e) => {
			e.stopPropagation();
			$scope.messageHide();
			$scope.CancelingCreateContestProcess(e);
		};
	};

	indexCtrl.$inject = ['$scope', 'backOfficeCreateContestSrv', '$rootScope', 'httpSrv', 'dispatcherSrv', 'createObjectForFixtures', 'checkboxSrv'];

	return indexCtrl;
});
