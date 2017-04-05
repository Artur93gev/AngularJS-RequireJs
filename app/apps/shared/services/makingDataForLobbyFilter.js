define([], () => {
	'use strict';

	let makingDataForLobbyFilter

	angular.module('shared').service('makingDataForLobbyFilter', makingDataForLobbyFilter = () => {
		let _filtering = (object) => {
			let obj, options, counter, objForReturn = {}, key, i, sportId, prizes;
			obj = object.contestDetails;
			options = object.filter;
			prizes = object.prizes;
			objForReturn = {
				ContestType 	: [], 	// required
				ContestDuration : [], 	// required
				PrizeFundType	: [],
				Counter 		: false,
				AdminCreated 	: undefined,
				UserCreated 	: undefined,
				SearchText 		: undefined,
				MinEntryFee 	: 0, 	// required
				MaxEntryFee 	: 0, 	// required
				FromEntry		: undefined,
				ToEntry 		: undefined,
				Regions 		: [], 	// required
				SortSetting 	: {
									SortColumn 	: undefined,
									IsAsc 		: undefined,
								},
				StartDate 		: undefined,
				EndDate 		: undefined,
				StatusList		: [],
				IsPrivate 		: undefined,
				IsMultiple 		: undefined
			}
			counter = 0;
			for (i = 0; i < prizes.length; i++) {
				if (prizes[i].model) {
					counter++;
					objForReturn.PrizeFundType.push(prizes[i].id);
				}
			}
			if (counter == prizes.length) {
				delete objForReturn.PrizeFundType;
			}
			objForReturn.MinEntryFee 	= options.minModel;
			objForReturn.MaxEntryFee 	= options.maxModel;
			objForReturn.SearchText 	= options.nameSearch;
			objForReturn.FromEntry 		= options.minEntry;
			objForReturn.ToEntry 		= options.maxEntry;
			objForReturn.StartDate 		= options.startDate;
			objForReturn.EndDate 		= options.endDate;

			for (key in obj) {
				counter = 0;
				for (i = 0; i < obj[key].length; i++) {
					if (key == 'sport type') {
						if (obj[key][i].model) {
							sportId = obj[key][i].id;
							if (sportId == 2) {
								objForReturn.Regions = [925, 1013, 1014];
							} else {
								objForReturn.Regions = [995];
							}
						}
					}
					if (key == 'contest type') {
						if (obj[key][i].model) {
							objForReturn.ContestType.push(obj[key][i].id);
						}
					}
					if (key == 'contest status') {
						if (obj[key][i].model) {
							objForReturn.StatusList.push(obj[key][i].id);
						}
					}
					if (key == 'contest duration') {
						if (obj[key][i].model) {
							objForReturn.ContestDuration.push(obj[key][i].id);
						}
					}
					if (key == 'created type') {
						if (obj[key][i].model) {
							if (obj[key][i].id == 1) {
								objForReturn.AdminCreated = true;
							} else {
								objForReturn.UserCreated = true;
							}
						}
					}
					if (key == 'entry type') {
						if (obj[key][i].model) {
							counter++;
							if (obj[key][i].id == 2) {
								objForReturn.IsMultiple = true;
							} else {
								objForReturn.IsMultiple = false;
							}
						}
					}
					if (key == 'privacy') {
						if (obj[key][i].model) {
							counter++;
							if (obj[key][i].id == 1) {
								objForReturn.IsPrivate = true;
							} else {
								objForReturn.IsPrivate = false;
							}
						}
					}
				}
				if (counter && counter == obj[key].length) {
					if (key == 'privacy') {
						delete objForReturn.IsPrivate;
					}
					if (key == 'entry type') {
						delete objForReturn.IsMultiple;
					}
				}
			}
			for (key in objForReturn) {
				if (objForReturn[key] === undefined || (Array.isArray(objForReturn[key]) && !objForReturn[key].length)) {
					delete objForReturn[key];
				}
				if (key == 'SortSetting' && objForReturn[key].SortColumn == undefined) {
					delete objForReturn[key];
				}
			}
			return [objForReturn, sportId];
		}

		return {
			filtering(object) {
				return _filtering(object);
			}
		}
	});

	makingDataForLobbyFilter.$inject = [];
});
