define([], () => {
	'use strict';

	var route = ($stateProvider) => {
		$stateProvider
			.state('accontsModule', {
				url 		: 'accounts',
				templateUrl	: 'app/apps/accounts/view/index.html',
				controller 	: 'accountsCtrl'
			});
	}
});
