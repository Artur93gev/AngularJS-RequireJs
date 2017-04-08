require.config({
	baseUrl : '../../',
	paths : {
		// libs

		'angular' 			: 'bower_components/angular/angular',
		'angular-animate' 	: 'bower_components/angular-animate/angular-animate',
		'angular-aria' 		: 'bower_components/angular-aria/angular-aria',
		'angular-i18n' 		: 'bower_components/angular-i18n/angular-locale_am',
		'angular-material' 	: 'bower_components/angular-material/angular-material',
		'angular-route' 	: 'bower_components/angular-route/angular-route',
		'angular-sanitize' 	: 'bower_components/angular-sanitize/angular-sanitize',
		'angular-translate' : 'bower_components/angular-translate/angular-translate',
		'angular-ui-router' : 'bower_components/angular-ui-router/release/angular-ui-router',
		'jquery' 			: 'bower_components/jquery/dist/jquery',
		'angularAMD' 		: 'bower_components/angularAMD/angularAMD',
		'angular-lazyloader': 'bower_components/oclazyload/dist/ocLazyLoad.require',
		'jquery-ui' 		: 'bower_components/jquery-ui/jquery-ui',
		'material-calendar' : 'bower_components/material-calendar/angular-material-calendar',
		'angular-translate-loader-static-files' : 'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files',


		// app module

		'app'					: 	'app/app',
		'appConfig'				: 	'app/configs/config',
		'appRun'				: 	'app/configs/run',
		'appRoute'				: 	'app/routes/route',
		'appMainSrv'			: 	'app/services/mainSrv',
		'appGeneralTabs'		: 	'app/directives/generalTabs/app',
		'appGeneralTabsCtrl'	: 	'app/directives/generalTabs/controller/index',
		'appPersonalPart'		: 	'app/directives/personalPart/app',
		'appPersonalPartCtrl'	: 	'app/directives/personalPart/controller/index',
		'appController'			: 	'app/controller/index',

		// accounts module

		'accounts' 				: 	'app/apps/accounts/app',
		'accountsRoute'			: 	'app/apps/accounts/routes/route',
		'accountsRun'			: 	'app/apps/accounts/configs/run',
		'accountsController'	: 	'app/apps/accounts/controller/index',

		// platform module

		'platform' 						: 	'app/apps/platform/app',
		'platformController'			: 	'app/apps/platform/controller/index',
		'dataRestructure'				: 	'app/apps/platform/services/dataRestructure',
		'dataWorker'					: 	'app/apps/platform/services/dataWorker',
		'dispatcherSrv'					: 	'app/apps/platform/services/dispatcherSrv',
		'errorHandler'					: 	'app/apps/platform/services/errorHandler',
		'httpSrv'						: 	'app/apps/platform/services/httpSrv',
		'errorMessage'					: 	'app/apps/platform/directives/errorMessage/app',
		'errorHandlerController'		: 	'app/apps/platform/directives/errorMessage/controller/index',
		'loader'						: 	'app/apps/platform/directives/loader/app',
		'loaderController'				: 	'app/apps/platform/directives/loader/controller/index',

		// shared module

		'shared' 						: 	'app/apps/shared/app',
		'sharedRun' 					: 	'app/apps/shared/configs/run',
		'contestCreateFactory'			: 	'app/apps/shared/factories/index',
		'contestsFilterSrv'				: 	'app/apps/shared/factories/contestsFilterSrv',
		'checkboxSrv'					: 	'app/apps/shared/services/checkbox',
		'checkboxSource' 				: 	'app/apps/shared/assets/js/utils/checkbox',
		'tableConstructor'				: 	'app/apps/shared/services/table',
		'contestsRenaming'				: 	'app/apps/shared/services/renaming',
		'bankReportSrv'					: 	'app/apps/shared/services/reportSrv',
		'createObjectForFixtures'		: 	'app/apps/shared/services/createObjectForFixturesSrv',
		'makingDataForLobbyFilter'		: 	'app/apps/shared/services/makingDataForLobbyFilter',
		'calendar'						: 	'app/apps/shared/directives/calendar/app',
		'calendarController'			: 	'app/apps/shared/directives/calendar/controller/index',
		'contestDrawTable'				: 	'app/apps/shared/directives/contestDrawTable/app',
		'contestDrawTableController'	: 	'app/apps/shared/directives/contestDrawTable/controller/index',
		'checkboxesSource' 				: 	'app/apps/shared/directives/checkboxes/assets/js/utils/checkboxesSource',
		'checkboxesFct'					: 	'app/apps/shared/directives/checkboxes/factories/checkboxes',
		'checkboxesController'			: 	'app/apps/shared/directives/checkboxes/controller/index',
		'checkboxesDir' 				: 	'app/apps/shared/directives/checkboxes/app',
		'radiobuttonsSource'			: 	'app/apps/shared/directives/radiobuttons/assets/js/utils/radiobuttons',
		'radiobuttonsFct' 				: 	'app/apps/shared/directives/radiobuttons/factories/radiobuttons',
		'radiobuttonsController'		: 	'app/apps/shared/directives/radiobuttons/controller/index',
		'radiobuttonsDir' 				: 	'app/apps/shared/directives/radiobuttons/app',
		'dropdown'                      :   'app/apps/shared/directives/dropdown/app',
		'dropdownController'            :   'app/apps/shared/directives/dropdown/controller/index',
		'dropdownSource'                :   'app/apps/shared/directives/dropdown/assets/js/utils/dropdown',
		'dropdownFct'                   :   'app/apps/shared/directives/dropdown/factories/dropdownFct',
        'pagination'                    :   'app/apps/shared/directives/pagination/app',
        'paginationController'          :   'app/apps/shared/directives/pagination/controller/index',
        'paginationSource'              :   'app/apps/shared/directives/pagination/assets/js/utils/pagination',
        'paginationFct'                 :   'app/apps/shared/directives/pagination/factories/paginationFct',
        'createNewLine'             	:   'app/apps/shared/directives/createNewLine/app',
        'createNewLineController'       :   'app/apps/shared/directives/createNewLine/controller/index',
        'createNewLineSource'           :   'app/apps/shared/directives/createNewLine/assets/js/utils/createNewLine',
        'createNewLineFct'              :   'app/apps/shared/directives/createNewLine/factories/createNewLineFct',
        'search'             			:   'app/apps/shared/directives/search/app',
        'searchController'      		:   'app/apps/shared/directives/search/controller/index',
        'searchSource' 		        	:   'app/apps/shared/directives/search/assets/js/utils/search',
        'searchFct'         		    :   'app/apps/shared/directives/search/factories/searchFct',
     	'intervals'             		:   'app/apps/shared/directives/intervals/app',
        'intervalsController'      		:   'app/apps/shared/directives/intervals/controller/index',
        'intervalsSource' 		        :   'app/apps/shared/directives/intervals/assets/js/utils/intervals',
        'intervalsFct'         		    :   'app/apps/shared/directives/intervals/factories/intervals',
     	'headersControl'             	:   'app/apps/shared/directives/headersControl/app',
        'headersControlController'      :   'app/apps/shared/directives/headersControl/controller/index',
        'headersControlSource' 		    :   'app/apps/shared/directives/headersControl/assets/js/utils/headersControl',
        'headersControlFct'         	:   'app/apps/shared/directives/headersControl/factories/headersControl',
        'deleteLine'           	  		:   'app/apps/shared/directives/deleteLine/app',
        'deleteLineController'      	:   'app/apps/shared/directives/deleteLine/controller/index',
        'deleteLineSource' 		    	:   'app/apps/shared/directives/deleteLine/assets/js/utils/deleteLine',
        'deleteLineFct'         		:   'app/apps/shared/directives/deleteLine/factories/deleteLine',
        'filters'           	  		:   'app/apps/shared/directives/filters/app',
        'filtersController'		      	:   'app/apps/shared/directives/filters/controller/index',
        'filtersSource' 		    	:   'app/apps/shared/directives/filters/assets/js/utils/filters',
        'filtersFct'         			:   'app/apps/shared/directives/filters/factories/filters',
        'table'           	  			:   'app/apps/shared/directives/table/app',
        'tableController'      			:   'app/apps/shared/directives/table/controller/index',
        'tableSource' 		    		:   'app/apps/shared/directives/table/assets/js/utils/table',
        'tableFct'         				:   'app/apps/shared/directives/table/factories/table'
	},
	shim : {

		'angular' : {
			deps : [],
			exports : 'angular'
		},

		'jquery' : {
			deps : [],
			exports : '$',
		},

		'angular-animate' 	: ['angular'],
		'angular-route' 	: ['angular'],
		'angular-aria' 		: ['angular'],
		'angular-i18n' 		: ['angular'],
		'angular-lazyloader': ['angular'],
		'angular-material' 	: ['angular', 'angular-aria', 'angular-animate'],
		'angular-sanitize' 	: ['angular'],
		'angular-translate' : ['angular'],
		'angular-translate-loader-static-files' : ['angular'],
		'angular-ui-router' : ['angular'],
		'jquery-ui' 		: ['jquery'],
		'angularAMD' 		: ['angular'],
		'material-calendar' : ['angular', 'angular-material', 'angular-sanitize']
	}
});

require(['app'],
	() => {
	    'use strict';

	}
);
