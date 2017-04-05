define([], () => {
	'use strict';

	let contestGridRenaming;
	
	angular.module('shared').service('contestsGridRenaming', contestGridRenaming = ($rootScope) => {
		let _renaming = (arr) => {
			let item = {}, days, arrForReturn = [], arrOfHours = [], date, dataForDays, j, key;
			date = new Date();
			arrForReturn = [];
			for (j = 0; j < arr.length; j++) {
				arrForReturn[j] = [];
				for (key in arr[j]) {
					if (key == "CreatedType") {
						if (arr[j][key]) {
							arr[j][key] = "Admin";
						} else {
							arr[j][key] = "User";
						}
					}
					if (key == "EntryType") {
						if (arr[j][key]) {
							arr[j][key] = "Multiple";
						} else {
							arr[j][key] = "Single";
						}
					}
					if (key == "Privacy") {
						if (arr[j][key]) {
							arr[j][key] = "Private";
						} else {
							arr[j][key] = "Public";
						}
					}
					if (key == "ContestType") {
						if (arr[j][key] == 1) {
							arr[j][key] = "Regular";
						}
						if (arr[j][key] == 2) {
							arr[j][key] = "H2H";
						}
						if (arr[j][key] == 3) {
							arr[j][key] = "H2H matrix";
						}
					}
					if (key == "ContestDuration") {
						if (arr[j][key] == 2) {
							arr[j][key] = "Short";
						}
						if (arr[j][key] == 1) {
							arr[j][key] = "Daily";
						}
						if (arr[j][key] == 3) {
							arr[j][key] = "Long";
						}
						if (arr[j][key] == 4) {
							arr[j][key] = "Full";
						}
					}
					if (key == "ContestStatus") {
						if (arr[j][key] == 1) {
							arr[j][key] = "Live";
						}
						if (arr[j][key] == 2) {
							arr[j][key] = "Upcoming";
						}
						if (arr[j][key] == 3) {
							arr[j][key] = "Finished";
						}
						if (arr[j][key] == 4) {
							arr[j][key] = "Cancel";
						}
						if (arr[j][key] == 5) {
							arr[j][key] = "Inactive";
						}
						if (arr[j][key] == 6) {
							arr[j][key] = "Finishied and not Visible";
						}
						if (arr[j][key] == 7) {
							arr[j][key] = "Invisible";
						}
					}
					if (key == "IsGaranteed") {
						if (arr[j][key]) {
							arr[j][key] = "Yes";
						} else {
							arr[j][key] = "No";
						}
					}
					if (key == 'ContestDate') {
						if (arr[j][key]['IsContestStartDate']) {
							arr[j][key][key] = new Date(arr[j][key][key]);
							days = arr[j][key][key].getDate() - date.getDate();
							if (days > 0) {
								arr[j][key][key] = 'In ' + days + ' day';
								if (days > 1) {
									arr[j][key][key] += 's';
								}
							} else {
								days = arr[j][key][key].getTime() - date.getTime();
								arr[j][key][key] = days;
								arrOfHours.push(j);
							}
						} else {
							arr[j][key][key] = new Date(arr[j][key][key]);
						}
					}
					if (key == 'AllPlayers' || key == 'AllDeposit' || key == 'EndBankBalance' || key == 'StartBankBalance' || key == 'BetConstructRake' || key == 'OwnRake' || key == 'OwnDeposit' || key == 'OwnPlayers') {
						try {
							arr[j][key] = arr[j][key][key];
						} catch(err) {
							console.log(err);
						}
					}
					if (key == 'BankLogHistory') {
						arr[j][key] = 'Show';
					}
					if (arr[j][key] == null) {
						delete arr[j][key];
					} else {
						item.model = true;
						item.name = key;
						item.value = arr[j][key];
						arrForReturn[j].push(item);
						item = {}
					} 
				}
				arrForReturn[j].$$model = false;
			}
			dataForDays = {
				hours	: arrOfHours
			}
			$rootScope.$broadcast('daysAndDate', dataForDays);
			$rootScope.$broadcast('renamedArray', arr);

			return arrForReturn;
		}
		return {
			renaming(arr) {
				return _renaming(arr);
			}
		}
	});

	contestGridRenaming.$inject = ['$rootScope'];
});
