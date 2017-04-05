define(['headersControlFct'
	], () => {
		'use strict';

		let headersControl = (HeadersControlFct, $ocLazyLoad) => {
			return {
				restrict 	: 'E',
				scope 		: {
					options : '=',
					fn 		: '='
				},
				templateUrl : 'app/apps/shared/directives/headersControl/view/index.html',
				link(scope, elem , attr) {
					$ocLazyLoad.load({
						files : ['app/apps/shared/directives/headersControl/assets/stylesheets/css/app.css']
					});
					console.log(scope.options)
					scope.headersControl = new HeadersControlFct(scope.options);
					scope.fn = scope.headersControl.getResult;
				}
			}
		}

		headersControl.$inject = ['HeadersControlFct', '$ocLazyLoad'];

		return headersControl;
});
