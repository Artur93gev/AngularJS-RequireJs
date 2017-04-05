define([], () => {
    'use strict';

    var route = ($stateProvider) => {
    	$stateProvider
    		.state('missionsModule', {
    			url 		: 'missions',
    			templateUrl : 'app/apps/missions/view/index.html',
    			controller 	: 'missionsCtrl'
    		});
    }

    route.$inject = ['$stateProvider'];

    return route;
});
