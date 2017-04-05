define([], () => {
	'use strict';

	var backOfficeCreateContestSrv;
	
	angular.module('shared').factory('backOfficeCreateContestSrv', backOfficeCreateContestSrv = () => {
		function dataForContestCreate() {
			let arrOfRoundTypes, j, i, obj;
			this.arrGenInput = [
				{
					header 		: "Sport Type",
					model 		: "sportType",
					type 		: ""
				},
				{
					header 		: "Contest Name",
					model 		: "contestName",
					type 		: "text"
				},
				{
					header 		: "Network",
					model 		: "network",
					text 		: "text"
				},
				{
					header 		: "Privacy",
					model 		: "privacy",
					type 		: ""
				},
				{
					header 		: "Password",
					model 		: "password",
					type 		: "password"
				}
			],
			this.arrContestType = [
				{
					name 	: "Regular",
					id 		: "1",
					model 	: true
				},
				{
					name 	: "H2H" ,
					id 		: "2",
					model 	: false
				},
				{
					name 		: "H2H matrix",
					id 			: "3",
					disabled	: "true",
					model 		: false
				}
			],
			this.arrContestTime = [
				{
					name 	: "Daily",
					id 		: "1",
					model 	: false
				},
				{
					name 	: "Short",
					id 		: "2",
					model 	: false
				},
				{
					name 	: "Long",
					id 		: "3", 
					model 	: false
				},
				{
					name 	: "Full",
					id 		: "4",
					model 	: false
				}
			],
			this.arrContestEntries = [
				{
					name 	: "Single",
					id 		: "1",
					model 	: true
				},
				{
					name 	: "Multiple",
					id 		: "2",
					model 	: false
				}
			],
			this.arrEntriesAndPrize = [
				{
					name 	: "Size",
					value 	: "",
					model 	: 3
				},
				{
					name 	: "Entry fee",
					value	: "USD",
					model 	: 0
				},
				{
					name 	: "Potential prize fund",
					value	: "USD",
					model 	: 0
				}
			],
			this.arrPrizes = [
				{
					name 	: "Winner Takes All",
					id 		: "10",
					model 	: true
				},
				{
					name 	: "Distributed",
					id 		: "9",
					model 	: false
				},
				{
					name 	: "50/50",
					id 		: "1",
					model 	: false
				},
				{
					name 	: "Triple",
					id 		: "2",
					model 	: false
				},
				{
					name 	: "Quadruple",
					id 		: "8",
					model 	: false
				}
			],
			this.arrBonusPart = [
				{
					name 		: "Satelite(contest name)",
					placeholder	: "contest name"
				},
				{
					name 		: "Satelite(contest id)",
					placeholder : "contest id"
				}
			],
			this.arrRoundTypes = [
				{
					name : "Single round"
				},
				{
					name : "Custom round"
				},
				{
					name : "Full season"
				}
			],
			this.arrOfPrivacy = [
				{
					name : 'Private'
				},
				{
					name : 'Public'
				}
			],
			this.dropDownCtrlFunc = (flag, elem1, elem2, index) => {
				if (flag) {
					angular.element(elem1)[index].style.transform = "rotate(180deg)";
					angular.element(elem2)[index].style.display = "inline-block";
				} else {
					angular.element(elem1)[index].style.transform = "";									
					angular.element(elem2)[index].style.display = "";
				}
			},
			this.choosingTypeOfRoundFromSrv	= (item,arr) => {
				arrOfRoundTypes = angular.element.find('.fs-back-office-fixtures-part-round-types');
				for (j = 0; j <= arr.length - 1; j++) {
					if (item == arr[j].name) {
						arrOfRoundTypes[j].style.borderBottom = "2px solid #d9318a";
						arrOfRoundTypes[j].style.color = "#3f4553";										
					} else {
						arrOfRoundTypes[j].style.borderBottom = "none";
						arrOfRoundTypes[j].style.color = "#a5aabc";
					}
				}
			},
			this.errorMessageReport = (flag, text, place, percent) => {
				if (flag) {
					angular.element(".fs-back-office-contest-type-distributed-error-message")[0].innerText = text;
					angular.element(".fs-back-office-contest-type-distributed-error-message").css("display", "inline-block");
					if (place) {
						angular.element('.fs-back-office-disributed-part-place-input-container:last').css("border-color", "#d6657c");
					}
					if (percent) {
						angular.element('.fs-back-office-disributed-part-percent-input-container:last').css("border-color", "#d6657c");
					}
				} else {
					angular.element(".fs-back-office-contest-type-distributed-error-message").css("display", "");
					angular.element('.fs-back-office-disributed-part-place-input-container:last').css("border-color", "");
					angular.element('.fs-back-office-disributed-part-percent-input-container:last').css("border-color", "");
				}
			},
			this.availablePartersFromAll = (allList, availableList) => {
				for (j = 0; j < allList.length; j++) {
					for (i = 0; i < availableList.length; i++) {
						allList[j].correct = 0;
						if (allList[j].id == availableList[i]){
							allList[j].model = true;
							allList[j].available = true;
							break;
						} else {
							allList[j].model = false;
						}
					}
				}
			},
			this.getAllRoundsAndMaches = (arr, duration) => {
				obj = {
					rounds  : [],
					daysAllchecked    : [],
					daysNotAllchecked    : [],
					roundsNotAllchecked    : [],
					matches : []
				};

				Object.keys(arr).map((round) => {
					if (arr[round].checked){
						obj.rounds.push(arr[round].id);
						Object.keys(arr[round]).map((day) => {
							if (arr[round][day].checked) {
								obj.daysAllchecked.push(arr[round][day].id);
							}
						});
					} else {
						Object.keys(arr[round]).map((day) => {
							Object.keys(arr[round][day]).map((matches) => {
								if (arr[round][day][matches].checked){
									obj.matches.push(arr[round][day][matches].id);
									if (obj.daysNotAllchecked.indexOf(arr[round][day].id) == -1) {           //days when exist match
										obj.daysNotAllchecked.push(arr[round][day].id);
									}
									if (obj.roundsNotAllchecked.indexOf(arr[round].id) == -1) {           //days when exist match
										obj.roundsNotAllchecked.push(arr[round].id);
									}
								}
							});
						});
					}
				});

				if (obj.rounds.length == 0) {
					if (obj.daysNotAllchecked.length <= 1) {
						duration = 1;
					} else {
						if (obj.roundsNotAllchecked.length <= 1) {
							duration = 2;
						} else {
							duration = 3;
						}
					}
				} else if (obj.rounds.length == 1) {
					if (obj.daysAllchecked.length == 1) {
						if (obj.matches.length == 0) {
							duration = 1;
						} else {
							duration = 3;
						}
					} else {
						if (obj.matches.length == 0) {
							duration = 2;
						} else {
							duration = 3;
						}
					}
				} else {
					if (arr.checked) {
						duration = 4;
					} else {
						duration = 3;
					}
				}
				
				return {
					rounds : obj.rounds,
					matches: obj.matches,
					duration: duration,
				}
			},
			this.getAllDaysAndMaches = (arr, duration) => {

				obj = {
					rounds  : [],
					days  : [],
					matches : [],
					singleMatches: []
				};

				Object.keys(arr).map((day) => {
					if (arr[day].checked){
						obj.days.push(arr[day].id);
						Object.keys(arr[day]).map((matches) => {
							if(arr[day][matches].checked){
								obj.matches.push(arr[day][matches].id);
							}
						});
					} else {
						Object.keys(arr[day]).map((matches) => {
							if(arr[day][matches].checked){
								obj.matches.push(arr[day][matches].id);
								obj.singleMatches.push(arr[day][matches].id);
							}
						});
					}
				});



				if(obj.days.length == 0) {
					duration = 1;
				} else  if(obj.days.length == 1) {
					if (obj.singleMatches.length == 0) {
						duration = 1;
					} else {
						duration = 2;
					}
				}else if(obj.days.length == 2) {
					if (obj.singleMatches.length == 0) {
						duration = 2;
					} else {
						duration = 3;
					}
				} else {
					if(arr.checked){
						duration = 4;
					} else {
						duration = 3;
					}
				}

				return {
					rounds 		: [],
					matches 	: obj.mathces,
					duration 	: duration
				}
			}
		}
		return dataForContestCreate;
	});

	backOfficeCreateContestSrv.$inject = [];

});
