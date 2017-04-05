define([], () => {
	'use strict';

	var config = ($httpProvider, $compileProvider, $ocLazyLoadProvider) => {
		$compileProvider.debugInfoEnabled(false);
		$httpProvider.defaults.withCredentials = true;
		// $ocLazyLoadProvider.config({
		// 	debug : true,
		// 	events : true,
		// 	asyncLoader : require,
		// 	modules: [{
  //   			name: 'login',
  //   			files: ['login']
  // 				}]
		// });
	};
	
	config.$inject = ['$httpProvider', '$compileProvider', '$ocLazyLoadProvider'];
	
	return config;
});