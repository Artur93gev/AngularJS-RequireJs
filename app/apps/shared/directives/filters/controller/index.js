define(['filtersFct'
	], () => {
		'use strict';

		let filtersController = (FiltersFct, $ocLazyLoad) => {
			return {
				restrict 	: 'E',
				scope 		: {
					options : '='
				},
				templateUrl : 'app/apps/shared/directives/filters/view/index.html',
				link(scope, elem, attr) {
					$ocLazyLoad.load({
						files : ['app/apps/shared/directives/filters/assets/stylesheets/css/app.css']
					});
					scope.filters = new FiltersFct(scope.options);
				}
			}
		};

		filtersController.$inject = ['FiltersFct', '$ocLazyLoad'];

		return filtersController;
});
