define(['calendarController'
    ],
    (calendarController) => {
	   'use strict';

	   angular.module('shared').directive('calendar', calendarController);

});
