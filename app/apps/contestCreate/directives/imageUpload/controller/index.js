define([], () => {
	'use strict';

	let imageUpload = ($rootScope, $ocLazyLoad) => {
		let imageElement;
		return {
			scope		: false,
			transclude 	: true,
			restrict 	: 'A',
			link(scope, elem, attr) {

                $ocLazyLoad.load({
                    files : ['app/apps/contestCreate/directives/imageUpload/assets/stylesheets/css/app.css']
                });

				elem.bind('change', (e) => {
					if (e.target.files[0]) {
						scope.imageForPrize = e.target.files[0];
						scope.tmpPath = URL.createObjectURL(scope.imageForPrize);
						imageElement = angular.element.find('.fs-back-office-contest-details-image-upload');
						angular.element('.fs-back-office-contest-details-image-upload-recycle')[0].style.display = 'inline-block';
						angular.element('.fs-back-office-contest-details-image-upload-input')[0].style.zIndex = '0';
						imageElement[0].style.opacity = 1;
						imageElement[0].style.backgroundImage = 'url(' + scope.tmpPath + ')';
						$rootScope.data = new FormData();
						$rootScope.data.append(e.target.files[0].name, e.target.files[0]);
					}
				});
			}
		}
	};

	imageUpload.$inject = ['$rootScope', '$ocLazyLoad'];

	return imageUpload;
});
