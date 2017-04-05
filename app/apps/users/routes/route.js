define([], () => {
    'use strict';

    var route = ($stateProvider) => {
    	$stateProvider
    		.state('usersModule', {
    			url 		: 'users',
    			templateUrl : 'app/apps/users/view/index.html',
    			controller 	: 'usersCtrl'
    		});
    }

    route.$inject = ['$stateProvider'];

    return route;
});
