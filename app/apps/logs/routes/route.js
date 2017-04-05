define([], () => {
    'use strict';

    var route = ($stateProvider) => {
    	$stateProvider
    		.state('logsModule', {
    			url 		: 'logs',
    			templateUrl : 'app/apps/logs/view/index.html',
    			controller 	: 'logsCtrl'
    		});
    }

    route.$inject = ['$stateProvider'];

    return route;
});
