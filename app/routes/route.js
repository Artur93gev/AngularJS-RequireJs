define([], () => {
	'use strict';

	var routes = ($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) => {
		$ocLazyLoadProvider.config({
            loadedModules: ['app'],
            asyncLoader: require
        });
        $stateProvider
        	.state('accounts', {
        		url 		: 'accounts',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'accounts',
	            			files 	: ['accounts', 'app/apps/accounts/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	});
	};

	routes.$inject = ['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider'];
	
	return routes;
});
