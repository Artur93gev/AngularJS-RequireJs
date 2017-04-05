define([], () => {
	'use strict';

	var routes = ($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) => {
		$ocLazyLoadProvider.config({
            loadedModules: ['app'],
            asyncLoader: require
        });
        $stateProvider
        	.state('login', {
        		url 		: 'login',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'login',
	            			files 	: ['login', 'app/apps/login/assets/stylesheets/css/app.css' ]
	            		});
	            	}
	            }
        	})
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
        	})
        	.state('athletes', {
        		url 		: 'athletes',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'athletes',
	            			files 	: ['athletes', 'app/apps/athletes/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('bank', {
        		url 		: 'bank',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'bank',
	            			files 	: ['bank', 'app/apps/bank/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('bonus', {
        		url 		: 'bonus',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'bonus',
	            			files 	: ['bonus', 'app/apps/bonus/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('challanges', {
        		url 		: 'challanges',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'challanges',
	            			files 	: ['challanges', 'app/apps/challanges/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('cloud', {
        		url 		: 'cloud',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'cloud',
	            			files 	: ['cloud', 'app/apps/cloud/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('contestCreate', {
        		url 		: 'contestCreate',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'contestCreate',
	            			files 	: ['contestCreate', 'app/apps/contestCreate/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('contests', {
        		url 		: 'contests',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'contests',
	            			files 	: ['contests', 'app/apps/contests/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('leagues', {
        		url 		: 'leagues',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'leagues',
	            			files 	: ['leagues', 'app/apps/leagues/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('logs', {
        		url 		: 'logs',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'logs',
	            			files 	: ['logs', 'app/apps/logs/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('loyality', {
        		url 		: 'loyality',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'loyality',
	            			files 	: ['loyality', 'app/apps/loyality/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('missions', {
        		url 		: 'missions',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'missions',
	            			files 	: ['missions', 'app/apps/missions/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	})
        	.state('users', {
        		url 		: 'users',
	            resolve 	:  {
	            	load : function($ocLazyLoad) {
	            		return $ocLazyLoad.load({
	            			name 	: 'users',
	            			files 	: ['users', 'app/apps/users/assets/stylesheets/css/app.css']
	            		});
	            	}
	            }
        	});
	};

	routes.$inject = ['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider'];
	
	return routes;
});
