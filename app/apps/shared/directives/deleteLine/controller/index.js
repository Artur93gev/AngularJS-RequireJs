define(['deleteLineFct'
	], () => {
		'use strict';

		let deleteLineController = (DeleteLineFct, $ocLazyLoad) => {
			return {
				restrict 	: 'E',
				scope 		: {
					options : '='
				},
				templateUrl : 'app/apps/shared/directives/deleteLine/view/index.html',
				link(scope, elem, attr) {
					$ocLazyLoad.load({
						files : ['app/apps/shared/directives/deleteLine/assets/stylesheets/css/app.css']
					});
					scope.deleteLine = new DeleteLineFct(scope.options);
				}
			}
		}

		deleteLineController.$inject = ['DeleteLineFct', '$ocLazyLoad'];

		return deleteLineController;
});
