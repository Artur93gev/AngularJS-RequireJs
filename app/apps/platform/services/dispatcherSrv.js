/* Observer
* this is dispatcher for events
* that must be broadcasted between scopes 
*/


define([], () => {
	'use strict';

	var observer = ($rootScope) => {
		return {
			broadcast(e, data) {
				$rootScope.$broadcast(e, data);
			}
		}
	};

	observer.$inject = ['$rootScope'];

	return observer;
});
