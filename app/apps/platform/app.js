define(['angular',
	'platformController',
	'dataRestructure',
	'dataWorker',
	'dispatcherSrv',
	'errorHandler',
	'httpSrv',
	'errorMessage',
	'loader'
	], (angular, indexCtrl, dataRestructure, dataWorker, dispatcherSrv, errorHandler, httpSrv, errorMessage, loader) => {
		'use strict';

		var platform = angular.module('platform', [])
			.service('dataRestructure', dataRestructure)
			.service('dataWorker', dataWorker)
			.service('httpSrv', httpSrv)
			.service('errorHandler', errorHandler)
			.service('dispatcherSrv', dispatcherSrv)
			.directive('errorMessageDir', errorMessage)
			.directive('loaderDir', loader)
			.controller('platformCtrl', indexCtrl);
});
