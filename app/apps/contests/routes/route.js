define([], () => {
    'use strict';

    var route = ($stateProvider) => {
    	$stateProvider
    		.state('contestsModule', {
    			url 		: 'contests',
    			templateUrl : 'app/apps/contests/view/index.html',
    			controller 	: 'contestsCtrl'
    		});
    };

    route.$inject = ['$stateProvider'];

    return route;
});
