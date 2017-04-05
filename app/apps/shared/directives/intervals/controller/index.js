define(['intervalsFct'
	], () => {
		'use strict';

		let intervalsController = (IntervalsFct, $ocLazyLoad) => {
			return {
				restrict 	: 'E',
				scope  		: {
					options : '=',
					fn 		: '='
				},
				templateUrl : 'app/apps/shared/directives/intervals/view/index.html',
				link(scope, elem, attr) {
					$ocLazyLoad.load({
						files : ['app/apps/shared/directives/intervals/assets/stylesheets/css/app.css']
					});
					scope.intervals = new IntervalsFct(scope.options);
					scope.fn = scope.intervals.getResult;
				}
			}
		};

		intervalsController.$inject = ['IntervalsFct', '$ocLazyLoad'];

		return intervalsController;
});