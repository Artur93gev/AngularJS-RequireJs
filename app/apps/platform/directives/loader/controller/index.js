define([], () => {
	'use strict';
	
	let loader = ($ocLazyLoad) => {
		return {
			restrict	: 'EA',
			scope 		: false,
			templateUrl : "app/apps/platform/directives/loader/view/index.html",
			link(scope, elem, attr) {

                $ocLazyLoad.load({
                    files : ['app/apps/platform/directives/loader/assets/stylesheets/css/app.css']
                });

		        scope.loader = {
		            show : false
		        };
		        let loaderShow = () => {
		            scope.loader.show = true;
		        };
		        let loaderHide = () => {
		            scope.loader.show = false;
		        };

		        scope.$on('loaderShow', (e, data) => {
		        	loaderShow();
		        });

		        scope.$on('loaderHide', (e, data) => {
		        	loaderHide();
		        });
			}
		}
	};

	loader.$inject = ['$ocLazyLoad'];

	return loader;
});
