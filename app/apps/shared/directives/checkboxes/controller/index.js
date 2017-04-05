define(['checkboxesFct'
	], () => {
	'use strict';

	let checkboxesCtrl = (Checkboxes, $ocLazyLoad) => {
		return {
			restrict 	: 'E',
			scope 		: {
				options : '=',
				fn 		: '='
			},
			templateUrl : 'app/apps/shared/directives/checkboxes/view/index.html',
			link(scope, elem, attr) {
				$ocLazyLoad.load({
					files : ['app/apps/shared/directives/checkboxes/assets/stylesheets/css/app.css']
				});
				scope.checkbox = new Checkboxes(scope.options);
				scope.fn = scope.checkbox.getResult;
			}
		}
	};

	checkboxesCtrl.$inject = ['Checkboxes', '$ocLazyLoad'];

	return checkboxesCtrl;
});
