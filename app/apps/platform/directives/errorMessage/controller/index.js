define([], () => {
	'use strict';

	let errorMessage = (dispatcherSrv, $ocLazyLoad) => {
		let event;
		return {
			restrict 	: 'EA',
			scope		: false,
			templateUrl	: 'app/apps/platform/directives/errorMessage/view/index.html',
			link(scope, elem, attr) {
                $ocLazyLoad.load({
                    files : ['app/apps/platform/directives/errorMessage/assets/stylesheets/css/app.css']
                });
				scope.error = {};
				scope.$on('error', (e, data) => {
					scope.error = {
						flag : true
					};
					scope.messageSend = data;
					dispatcherSrv.broadcast('loaderHide');
					if (data.header == 'Notification') {
						dispatcherSrv.broadcast(data.event);
					}
				});
				scope.closeErrSucMessageByKeypress = (e) => {
					 if (e) {
		                e.stopPropagation();
		            }
		            if (e.which == 13 || e.keyCode == 13 || e.which == 32 || e.keyCode == 32) {
		                scope.closingErrSucPopup();
		            }
				}

				// closing popup

				scope.closingErrSucPopup = (e) => {
					if (e) {
						e.stopPropagation();
					}
					scope.error = {
						flag : false
					};
				};
			}
		}
	};

	errorMessage.$inject = ['dispatcherSrv', '$ocLazyLoad'];

	return errorMessage;
});
