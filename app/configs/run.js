define([], () => {
	'use strict';

	let currentState;

	var run = ($rootScope, $timeout, $state, dispatcherSrv) => {
        var event, current;
        $rootScope.$on('currentState', (e, data) => {
            if ($rootScope.getCookie('currentState') || (data == 'login')) {
                document.cookie = 'currentState=' + data;
                $state.go(data);
                event = $rootScope.$on('$stateChangeSuccess', function(e, data) {
                	if (data.name.search('Module') == -1) {
                    	$state.go(data.name + 'Module');
                	}
                    event();
                });
            }
        });


	    // window.onhashchange = () => {
	    //     if ($rootScope.getCookie('currentState') != 'login') {
	    //         current = window.location.hash.split('#/')[1];
	    //         dispatcherSrv.broadcast('currentState', current);
	    //     }
	    // };

	    $rootScope.getCookie = (name) => {
			let matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			));
			return matches ? decodeURIComponent(matches[1]) : undefined;
		};

		if ($rootScope.getCookie('currentState')) {
			currentState = $rootScope.getCookie('currentState');
            dispatcherSrv.broadcast('currentState', currentState);
		}

		if (!$rootScope.getCookie('currentState')) {
            currentState = 'login';
            dispatcherSrv.broadcast('currentState', currentState);
        }
	};

	run.$inject = ['$rootScope', '$timeout', '$state', 'dispatcherSrv'];

	return run;
});
