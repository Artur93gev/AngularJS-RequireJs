define([], () => {
	'use strict';

	var calendar = ($ocLazyLoad) => {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                selected: "="
            },
            templateUrl : 'app/apps/shared/directives/calendar/views/index.html',
            link(scope, elem, attr) {
                $ocLazyLoad.load({
                    files:['app/apps/shared/directives/calendar/assets/stylesheets/css/app.css']
                });
            }
        }
    };

    calendar.$inject = ['$ocLazyLoad'];

    return calendar;
});