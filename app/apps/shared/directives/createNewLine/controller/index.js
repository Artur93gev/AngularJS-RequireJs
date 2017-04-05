define(['createNewLineFct'
	], () => {
	'use strict';

	let createNewLineController = (CreateNewLine, $ocLazyLoad) => {
		return {
			restrict 	: 'E',
			scope 		: {
				fn : '&'
			},
			templateUrl : 'app/apps/shared/directives/createNewLine/view/index.html',
			link(scope, elem, attr) {
				$ocLazyLoad.load({
					files : ['app/apps/shared/directives/createNewLine/assets/stylesheets/css/app.css']
				});
				let options = scope.fn;
				scope.createNewLine = new CreateNewLine(options);
			}
		}
	};

	createNewLineController.$inject = ['CreateNewLine', '$ocLazyLoad'];

	return createNewLineController;
});
