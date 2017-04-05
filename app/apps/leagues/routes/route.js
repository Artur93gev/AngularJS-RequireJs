define([], () => {
    'use strict';

    var route = ($stateProvider) => {
    	$stateProvider
    		.state('leaguesModule', {
    			url 		: 'leagues',
    			templateUrl : 'app/apps/leagues/view/index.html',
    			controller 	: 'leaguesCtrl'
    		});
    }

    route.$inject = ['$stateProvider'];

    return route;
});
