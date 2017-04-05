define(['radiobuttonsFct'
	], () => {
	'use strict';

	let radiobuttonsCtrl = (Radiobuttons, $ocLazyLoad) => {
		return {
			restrict 	: 'E',
			scope 		: {
				options : '=',
				fn 		: '='
			},
			templateUrl : 'app/apps/shared/directives/radiobuttons/view/index.html',
			link(scope, elem, attr) {
				
				$ocLazyLoad.load({
					files : ['app/apps/shared/directives/radiobuttons/assets/stylesheets/css/app.css']
				});

				scope.radiobuttons = new Radiobuttons(scope.options);
				
				scope.fn = scope.radiobuttons.getResult;
			}
		}
	}

	radiobuttonsCtrl.$inject = ['Radiobuttons', '$ocLazyLoad'];

	return radiobuttonsCtrl;
});
