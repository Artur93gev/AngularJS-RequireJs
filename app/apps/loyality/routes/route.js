define([], () => {
    'use strict';

    var route = ($stateProvider) => {
    	$stateProvider
    		.state('loyalityModule', {
    			url 		: 'loyality',
    			templateUrl : 'app/apps/loyality/view/index.html',
    			controller 	: 'loyalityCtrl'
    		});
    }

    route.$inject = ['$stateProvider'];

    return route;
});
