/* Facade Part
*
* this is for restructuring data that we get by given serviceName
* for givving our controller correct and useful data which not need 
* any manipulating
*/

define([], () => {
	'use strict';

	var dataRestructure = ($rootScope, dispatcherSrv) => {
		let i, j, item, arr, compItem;
		let _competitionsList = (data) => {
			arr = [];
			for (j = 0; j < data.length; j++) {
				item = {};
				item.name = data[j].Name;
				item.competitions = [];
				for (i = 0; i < data[j].Competitions.length; i++) {
					compItem = {};
					compItem.name = data[j].Competitions[i].Name;
					compItem.id = data[j].Competitions[i].Id;
					compItem.model = false;
					item.competitions.push(compItem);
				}
				arr.push(item);
			}
			return arr;
		};

		let _logOut = () => {
			if ($rootScope.getCookie('currentState')) {
                document.cookie = 'currentState=;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                dispatcherSrv.broadcast('currentState', 'login');
            }
		};
		let _allPartnerss = (data) => {
			arr = [
	        	{
                    name    : "All",
                    id      : -1,
                    model   : true
                }
            ];
	        for (j = 0; j < data.length; j++) {
	            item    = {};
	            item.name   = data[j].Name;
	            item.id     = data[j].Id;
	            item.model  = true;
	            arr.push(item);
        	}
        	return arr;
		};

		return {
			competitionsList(data) {
				return _competitionsList(data);
			},
			logOut(data) {
				// incoming data not used
				_logOut();
			},
			allPartners(data) {
				return _allPartnerss(data);
			}
		}
	};

	dataRestructure.$inject = ['$rootScope', 'dispatcherSrv'];

	return dataRestructure;
});
