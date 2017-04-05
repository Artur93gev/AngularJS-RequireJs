define([
	'angular',
	'jquery',
	'angular-lazyloader',
	'angular-ui-router',
	'angular-translate',
	'angular-sanitize',
	'material-calendar',
	'platform',
	'shared',
	'appConfig',
	'appRun',
	'appRoute',
	'appController',
	'appGeneralTabs',
	'appPersonalPart',
	'appMainSrv'
	],
	(angular, jQuery, lazyLoader, uiRouter, translate, sanitize, calendar, platform, shared, config, run, route, indexCtrl, generalTabs, personalPart, mainSrv) => {
		'use strict';
		var app = angular.module('app',
			['ui.router',
			'oc.lazyLoad',
			'pascalprecht.translate',
			'ngSanitize',
			'materialCalendar',
			'platform',
			'shared'])
			.config(config)
			.config(route)
			.run(run)
			.controller('indexCtrl', indexCtrl)
			.service('mainSrv', mainSrv)
			.directive('generalTabsDir', generalTabs)
			.directive('personalPartDir', personalPart);
			
		return angular.bootstrap(document, ['app']);
});
