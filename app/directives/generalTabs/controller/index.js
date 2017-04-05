define([], () => {
	'use strict';

	var generalTabs = ($rootScope, httpSrv, mainSrv, dispatcherSrv, $ocLazyLoad) => {
		let i, j, key, item = {}, current, currentState;


		return {
			restrict 	: 'EA',
			scope 		: false,
			templateUrl : 'app/directives/generalTabs/view/index.html',
			link(scope, elem, attr) {

                $ocLazyLoad.load({
                    files : ['app/directives/generalTabs/assets/stylesheets/css/app.css']
                });

				$rootScope.generalTabs = [];

			    for (j = 0; j < mainSrv.PermissionsList.length; j++) {
			        for (key in mainSrv.PermissionsList[j]) {
			            if (mainSrv.PermissionsList[j][key]) {
			                if (j == 0) {
			                    item.model = true;
			                } else {
			                    item.model = false;
			                }
			                item.value = key;
			                $rootScope.generalTabs.push(item);
			                item = {}
			            }
			        }
			    }

			    scope.choosingGenTab = (item) => {
			        if (item.value == 'Bank' || item.value == 'Contests' || item.value == 'Logs') {
			            currentState = item.value.toLowerCase();
                        dispatcherSrv.broadcast('currentState', currentState);
			            for (i = 0; i < $rootScope.generalTabs.length; i++) {
			                if ($rootScope.generalTabs[i].value == item.value) {
			                    $rootScope.generalTabs[i].model = true;    
			                } else {
		                        $rootScope.generalTabs[i].model = false;
		                    }
			            }
			        }
			    };
			}
		}
	};

	generalTabs.$inject = ['$rootScope', 'httpSrv', 'mainSrv', 'dispatcherSrv', '$ocLazyLoad'];

	return generalTabs;
});
