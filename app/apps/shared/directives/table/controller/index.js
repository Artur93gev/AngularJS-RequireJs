define(['tableFct'
	], () => {
		'use strict';

		let tableController = (TableFct, $ocLazyLoad) => {
			return {
				restrict 	: 'E',
				scope 		: {
					options : '='
				},
				templateUrl : 'app/apps/shared/directives/table/view/index.html',
				link(scope, elem, attr) {
					$ocLazyLoad.load({
						files : ['app/apps/shared/directives/table/assets/stylesheets/css/app.css']
					});
					scope.table = new TableFct(scope.options);
				}
			}
		}

		tableController.$inject = ['TableFct', '$ocLazyLoad'];

		return tableController;
});
